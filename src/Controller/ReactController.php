<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\UnicodeString;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use function Amp\Promise\first;
function capitalizeWords(string $str): string
{
    $words = explode(' ', strtolower($str));
    $capitalizedWords = array_map(function($word) {
        return ucfirst($word);
    }, $words);
    $normalizedWords = (new UnicodeString(implode(' ', $capitalizedWords)))->normalize(UnicodeString::NFD);
    $strippedWords = preg_replace('/[\p{Mn}]/u', '', $normalizedWords);
    $finalString = str_replace('-', ' ', $strippedWords);
    return ucfirst(strtolower($finalString));
}

class ReactController extends AbstractController
{
  #[Route('/', name: 'default')]
  public function homepage()
  {
      return $this->redirectToRoute('app_login');
  }

  #[Route('/accueil', name: 'accueil')]

  public function accueil()
  {
      if ($this->getUser()) {
        
        // $roleUser = json_encode($this->getUser()->getRoles()[0]);
        // echo "<script>console.log('$em');</script>";
          return $this->render('materiel/materiels.html.twig', ['page' => 'Accueil']);
      }

      return $this->redirectToRoute('app_login');
  }

  #[Route('/materiel', name: 'materiel')]
  public function materiel()
  {
      return $this->redirectToRoute('accueil');
  }

    #[Route('/materiel/{cat}', name: 'materiels_list')]
    public function materiels_list(string $cat)
    {

        if ($cat == null || $cat == '' || $cat == 'accueil') {
            $cat = 'Accueil';
        }
         else if ($cat == 'reseau') {
            $cat = 'Réseau';
          }
          else if ($cat == 'telephonique') {
            $cat = 'Téléphonique';
          }
          else if ($cat == 'desktop') {
            $cat = 'Desktop';
          }
          else if ($cat == 'reunion') {
            $cat = 'Réunion';
          }
          else {
            $cat = 'Accueil';
          }

          if ($this->getUser()) {
            return $this->render('materiel/materiels.html.twig', ['page' => $cat]);
        }

        return $this->redirectToRoute('app_login');
    }


    #[Route('/materiel/{cat}/{item}', name: 'materiel_details')]
    public function materiel_detail_item(string $cat, string $item)
    {

        if ($cat == null || $cat == '' || $cat == 'accueil') {
            $cat = 'Accueil';
        }
         else if ($cat == 'reseau') {
            $cat = 'Réseau';
          }
          else if ($cat == 'telephonique') {
            $cat = 'Téléphonique';
          }
          else if ($cat == 'desktop') {
            $cat = 'Desktop';
          }
          else if ($cat == 'reunion') {
            $cat = 'Réunion';
          }
          else {
            $cat = 'Accueil';
          }
          
          if ($this->getUser()) {
            return $this->render('materiel/materiel_details.html.twig', ['page' => $cat, 'item' => capitalizeWords($item)]);
        }

        return $this->redirectToRoute('app_login');
    }
}