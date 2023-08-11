<?php

namespace App\Controller;

use Google\Client as GoogleClient;
use Google\Service\Calendar;
use App\Repository\CategoryRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\UnicodeString;
use App\Repository\ProductRepository;
use Symfony\Component\Serializer\SerializerInterface;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Product;
use Symfony\Component\HttpKernel\KernelInterface;

function changeWords(string $str): string
{
  $words = explode(' ', strtolower($str));
  $capitalizedWords = array_map(function ($word) {
    return ($word);
  }, $words);
  $normalizedWords = (new UnicodeString(implode(' ', $capitalizedWords)))->normalize(UnicodeString::NFD);
  $strippedWords = preg_replace('/[\p{Mn}]/u', '', $normalizedWords);
  $finalString = str_replace(' ', '-', $strippedWords);
  return (strtolower($finalString));
}

function RemoveAccents($string)
{
  $string = htmlentities($string);
  return preg_replace("/&([a-z])[a-z]+;/i", "$1", $string);
}

class Api extends AbstractController
{

  #[Route('/api/products', name: 'products', methods: ['GET'])]
  public function getProductList(Request $request, ProductRepository $productRepository, SerializerInterface $serializer): JsonResponse
  {

    if ($this->getUser()) {

      $productList["items"] = $productRepository->findAll();
      $jsonProductList = $serializer->serialize($productList, 'json');
      return new JsonResponse($jsonProductList, Response::HTTP_OK, [], true);
    } else {
      $error = ([
        'message' => "Vous avez besoin de vous connecter afin d'utiliser ce chemin"
      ]);
      $jsonProductList = $serializer->serialize($error, 'json');
      return new JsonResponse($jsonProductList, Response::HTTP_OK, [], true);
    }
  }

  #[Route('/api/productsCat', name: 'products_Category', methods: ['GET'])]
  public function getproductsCategoryList(CategoryRepository $CategoryRepository, SerializerInterface $serializer): JsonResponse
  {

    if ($this->getUser()) {

      $productList["categories"] = $CategoryRepository->findAll();
      $jsonProductList = $serializer->serialize($productList, 'json');
      return new JsonResponse($jsonProductList, Response::HTTP_OK, [], true);
    } else {
      $error = ([
        'message' => "Vous avez besoin de vous connecter afin d'utiliser ce chemin"
      ]);
      $jsonProductList = $serializer->serialize($error, 'json');
      return new JsonResponse($jsonProductList, Response::HTTP_OK, [], true);
    }
  }

  #[Route('/api/reserveProduct', name: 'reserve_Product', methods: ['POST'])]
  public function reserveProduct(Request $request, KernelInterface $kernel, EntityManagerInterface $entityManager, ProductRepository $productRepository, SerializerInterface $serializer): JsonResponse
  {

    if ($this->getUser()) {

      $data = json_decode($request->getContent(), true);

      if ($data) {
        $id = $data['id'];
        $test = $productRepository->findOneBy(['productid' => $id]);
        if ($test == null) {
          $error = ([
            'message' => "La demande avec l'id correspondant n'existe pas"
          ]);
          $message = $serializer->serialize($error, 'json');
          return new JsonResponse($message, Response::HTTP_OK, [], true);
        }
        $testCategoryId = $serializer->serialize($test, 'json');
        $testCategoryId = json_decode($testCategoryId, true);

        if ($this->getUser()->getCategoryId() != $testCategoryId['categoryid']) {
          $error = ([
            'message' => "Vous n'avez pas besoin de réserver ce materiel dans votre situation"
          ]);
          $message = $serializer->serialize($error, 'json');
          return new JsonResponse($message, Response::HTTP_OK, [], true);
        }

        if (!$test->getAvailable()) {
          $error = ([
            'message' => "Vous ne pouvez pas réserver un matériel déjà réservé"
          ]);
          $message = $serializer->serialize($error, 'json');
          return new JsonResponse($message, Response::HTTP_OK, [], true);
        }

        //GOOGLE CALENDAR
        $calendarId = '69e129d6b440223c82dd7c76ecec9939b921ca2814c2a5d847b929f1db723d50@group.calendar.google.com';
        $client = new GoogleClient();
        $projectDir = $kernel->getProjectDir();
        $client->setAuthConfig($projectDir . $_ENV['GOOGLE_CREDENTIALS_PATH']);
        $client->setScopes(['https://www.googleapis.com/auth/calendar']);
        $calendarService = new Calendar($client);
        $event = new Calendar\Event([
          'summary' => $data['user'] . ': ' . $data['product'],
          'description' =>
          "Utilisateur: " . $data['user'] . "\n" .
            "Produit: " . $data['product'] . "\n" .
            "Catégorie: " . $data['category'] . "\n" .
            "Emplacement: " . $data['emplacement'] . "\n" .
            "Commentaire: " . $data['description'],
          'location' => "France",
          'start' => array(
            'dateTime' => $data['start_time'],
            'timeZone' => "Europe/Paris",
          ),
          'end' => array(
            'dateTime' => $data['end_time'],
            'timeZone' => "Europe/Paris",
          ),
          'recurrence' => ["RRULE:FREQ=DAILY;COUNT=1"],
          'attendees' => array(),
          'reminders' => array(
            'useDefault' => false,
            'overrides' => array(
              array('method' => "email", 'minutes' => 24 * 60),
              array('method' => "popup", 'minutes' => 10),
            ),
          ),
        ]);

        //insert event to the google calendar
        $event = $calendarService->events->insert($calendarId, $event);

        //set to unavailable from the db
        $test->setAvailable(0);
        $entityManager->persist($test);
        $entityManager->flush();
        $done = ([
          'message' => "Commande executé avec succès"
        ]);
        $message = $serializer->serialize($done, 'json');
        return new JsonResponse($message, Response::HTTP_OK, [], true);
      } else {
        $error = ([
          'message' => "Vous avez besoin de specifier un ID"
        ]);
        $message = $serializer->serialize($error, 'json');
        return new JsonResponse($message, Response::HTTP_OK, [], true);
      }
    } else {
      $error = ([
        'message' => "Vous avez besoin de vous connecter afin d'utiliser ce chemin"
      ]);
      $message = $serializer->serialize($error, 'json');
      return new JsonResponse($message, Response::HTTP_OK, [], true);
    }
  }

  #[Route('/api/addProduct', name: 'add_Product', methods: ['POST'])]
  public function addProduct(Request $request, EntityManagerInterface $entityManager, CategoryRepository $categoryRepository, ProductRepository $productRepository, SerializerInterface $serializer): JsonResponse
  {

    if ($this->getUser()) {
      if ($this->getUser()->getRoles()[0] == 'ROLE_ADMIN') {

        $data = json_decode($request->getContent(), true);
        if ($data) {

          $productID = $productRepository->findOneBy([], ['productid' => 'desc'])->getproductID() + 1;
          $name = $data['name'];
          $alt = $data['name'];
          $categoryID = $data['categoryID'];
          $emplacement = $data['emplacement'];
          $description = $data['description'];
          $caracteristiques = $data['caracteristiques'];
          $img = $data['img'];
          $href = '/materiel/' . RemoveAccents($categoryRepository->findOneBy(['categoryid' => $categoryID], ['name' => 'desc'])->getName()) . '/' . changeWords($name);
          $available = true;

          $post = new Product();

          $post->setproductID($productID);
          $post->setName($name);
          $post->setAlt($alt);
          $post->setCategoryid($categoryID);
          $post->setEmplacement($emplacement);
          $post->setDescription($description);
          $post->setCaracteristiques($caracteristiques);
          $post->setImg($img);
          $post->setHref($href);
          $post->setAvailable($available);

          $entityManager->persist($post);
          $entityManager->flush();

          $done = ([
            'message' => "Le matériel a été ajouté avec succès"
          ]);
          $message = $serializer->serialize($done, 'json');
          return new JsonResponse($message, Response::HTTP_OK, [], true);
        } else {
          $error = ([
            'error' => "Veuillez remplir tout les champs requis"
          ]);
          $message = $serializer->serialize($error, 'json');
          return new JsonResponse($message, Response::HTTP_OK, [], true);
        }
      } else {

        $error = ([
          'type' => "error",
          'message' => "Vous avez besoin d'une autorisation afin d'utiliser ce chemin"
        ]);
        $message = $serializer->serialize($error, 'json');
        return new JsonResponse($message, Response::HTTP_OK, [], true);
      }
    } else {
      $error = ([
        'message' => "Vous avez besoin de vous connecter afin d'utiliser ce chemin"
      ]);
      $jsonProductList = $serializer->serialize($error, 'json');
      return new JsonResponse($jsonProductList, Response::HTTP_OK, [], true);
    }
  }

  #[Route('/api/editProduct', name: 'edit_Product', methods: ['POST'])]
  public function editProduct(Request $request, EntityManagerInterface $entityManager, CategoryRepository $categoryRepository, ProductRepository $productRepository, SerializerInterface $serializer): JsonResponse
  {

    if ($this->getUser()) {
      if ($this->getUser()->getRoles()[0] == 'ROLE_ADMIN') {

        $data = json_decode($request->getContent(), true);
        if ($data) {

          $productID = $data['productid'];
          $name = $data['name'];
          $alt = $data['name'];
          $categoryID = $data['categoryID'];
          $emplacement = $data['emplacement'];
          $description = $data['description'];
          $caracteristiques = $data['caracteristiques'];
          $img = $data['img'];
          $href = '/materiel/' . RemoveAccents($categoryRepository->findOneBy(['categoryid' => $categoryID], ['name' => 'desc'])->getName()) . '/' . changeWords($name);
          $available = $data['available'];

          $post = $productRepository->findOneBy(['productid' => $productID]);

          $post->setproductID($productID);
          $post->setName($name);
          $post->setAlt($alt);
          $post->setCategoryid($categoryID);
          $post->setEmplacement($emplacement);
          $post->setDescription($description);
          $post->setCaracteristiques($caracteristiques);
          $post->setImg($img);
          $post->setHref($href);
          $post->setAvailable($available);

          $entityManager->persist($post);
          $entityManager->flush();

          $done = ([
            'message' => "Le matériel a été modifié avec succès"
          ]);
          $message = $serializer->serialize($done, 'json');
          return new JsonResponse($message, Response::HTTP_OK, [], true);
        } else {
          $error = ([
            'error' => "Veuillez remplir tout les champs requis"
          ]);
          $message = $serializer->serialize($error, 'json');
          return new JsonResponse($message, Response::HTTP_OK, [], true);
        }
      } else {

        $error = ([
          'type' => "error",
          'message' => "Vous avez besoin d'une autorisation afin d'utiliser ce chemin"
        ]);
        $message = $serializer->serialize($error, 'json');
        return new JsonResponse($message, Response::HTTP_OK, [], true);
      }
    } else {
      $error = ([
        'message' => "Vous avez besoin de vous connecter afin d'utiliser ce chemin"
      ]);
      $jsonProductList = $serializer->serialize($error, 'json');
      return new JsonResponse($jsonProductList, Response::HTTP_OK, [], true);
    }
  }

  #[Route('/api/deleteProduct', name: 'delete_Product', methods: ['POST'])]
  public function deleteProduct(Request $request, EntityManagerInterface $entityManager, ProductRepository $productRepository, SerializerInterface $serializer): JsonResponse
  {

    if ($this->getUser()) {
      if ($this->getUser()->getRoles()[0] == 'ROLE_ADMIN') {

        $data = json_decode($request->getContent(), true);

        if ($data) {
          $productid = $data['productid'];
          $test = $productRepository->findOneBy(['productid' => $productid]);

          if ($test == null) {
            $error = ([
              'type' => "error",
              'message' => "La demande avec l'id correspondant n'existe pas"
            ]);
            $message = $serializer->serialize($error, 'json');
            return new JsonResponse($message, Response::HTTP_OK, [], true);
          }

          $entityManager->remove($test);
          $entityManager->flush();
          $done = ([
            'message' => "Commande executé avec succès"
          ]);
          $message = $serializer->serialize($done, 'json');
          return new JsonResponse($message, Response::HTTP_OK, [], true);
        } else {
          $error = ([
            'type' => "error",
            'message' => "Vous avez besoin de specifier un ID"
          ]);
          $message = $serializer->serialize($error, 'json');
          return new JsonResponse($message, Response::HTTP_OK, [], true);
        }
      } else {

        $error = ([
          'type' => "error",
          'message' => "Vous avez besoin d'une autorisation afin d'utiliser ce chemin"
        ]);
        $message = $serializer->serialize($error, 'json');
        return new JsonResponse($message, Response::HTTP_OK, [], true);
      }
    } else {
      $error = ([
        'type' => "error",
        'message' => "Vous avez besoin de vous connecter afin d'utiliser ce chemin"
      ]);
      $message = $serializer->serialize($error, 'json');
      return new JsonResponse($message, Response::HTTP_OK, [], true);
    }
  }
}
