<?php

namespace App\Entity;

use App\Repository\ProductRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
class Product
{
    #[ORM\Id]
    #[ORM\Column]
    private ?int $productid = null;

    #[ORM\Column]
    private ?string $name = null;

    #[ORM\Column]
    private ?string $alt = null;

    #[ORM\Column]
    private ?int $categoryid = null;

    #[ORM\Column]
    private ?string $emplacement = null;

    #[ORM\Column]
    private ?string $description = null;

    #[ORM\Column]
    private ?string $caracteristiques = null;

    #[ORM\Column]
    private ?string $img = null;

    #[ORM\Column]
    private ?string $href = null;

    #[ORM\Column]
    private ?bool $available = null;

    public function getproductID(): ?int
    {
        return $this->productid;
    }
    public function setproductID(int $productid): ?static
    {
        $this->productid = $productid;
        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }
    public function setName(string $name): ?static
    {
        $this->name = $name;
        return $this;
    }

    public function getAlt(): ?string
    {
        return $this->alt;
    }
    public function setAlt(string $alt): ?static
    {
        $this->alt = $alt;
        return $this;
    }

    public function getCategoryid(): ?int
    {
        return $this->categoryid;
    }
    public function setCategoryid(int $categoryid): ?static
    {
        $this->categoryid = $categoryid;
        return $this;
    }

    public function getEmplacement(): ?string
    {
        return $this->emplacement;
    }
    public function setEmplacement(string $emplacement): ?static
    {
        $this->emplacement = $emplacement;
        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }
    public function setDescription(string $description): ?static
    {
        $this->description = $description;
        return $this;
    }
    
    public function getCaracteristiques(): ?string
    {
        return $this->caracteristiques;
    }
    public function setCaracteristiques(string $caracteristiques): ?static
    {
        $this->caracteristiques = $caracteristiques;
        return $this;
    }

    public function getImg(): ?string
    {
        return $this->img;
    }
    public function setImg(string $img): ?static
    {
        $this->img = $img;
        return $this;
    }

    public function getHref(): ?string
    {
        return $this->href;
    }
    public function setHref(string $href): ?static
    {
        $this->href = $href;
        return $this;
    }

    public function getAvailable(): ?bool
    {
        return $this->available;
    }
    public function setAvailable(bool $available): ?static
    {
        $this->available = $available;
        return $this;
    }
}
