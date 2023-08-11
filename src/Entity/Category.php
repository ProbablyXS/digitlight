<?php

namespace App\Entity;

use App\Repository\CategoryRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CategoryRepository::class)]
class Category
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $categoryid = null;

    #[ORM\Column]
    private ?string $name = null;

    public function getId(): ?int
    {
        return $this->categoryid;
    }

    public function getName(): ?string
    {
        return $this->name;
    }
}
