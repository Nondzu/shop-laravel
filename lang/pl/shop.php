<?php

return [
    'welcome' => [
        'products' => 'Produkty',
        'categories' => 'Kategorie',
        'price' => 'Cena',
        'filter' => 'Filtruj'
    ],
    'columns' => [
        'actions' => 'Akcje'
    ],
    'messages' => [
      'delete_confirm' => 'Czy na pewno chcesz usunąć rekord?'
    ],
    'button' => [
        'save' => 'Zapisz',
        'add' => 'Dodaj',
        'add_to_cart' => 'Dodaj do koszyka',
        'continue_shopping' => 'Wróć do sklepu',
        'payment' => 'Zapłać',
    ],
    'user' => [
        'index_title' => 'Lista użytkowników',
        'edit_title' => 'Edycja użytkownika: :name',
        'fields' => [
            'city' => 'Miasto',
            'zip_code' => 'Kod pocztowy',
            'street' => 'Ulica',
            'street_no' => 'Numer ulicy',
            'home_no' => 'Numer mieszkania',
        ],
        'status' => [
            'delete' => [
                'success' => 'Użytkownik usunięty!'
            ],
        ],
    ],
    'product' => [
        'add_title' => 'Dodawanie produktu',
        'edit_title' => 'Edycja produktu: :name',
        'show_title' => 'Podgląd produktu',
        'index_title' => 'Lista produktów',
        'status' => [
            'store' => [
                'success' => 'Produkt zapisany!'
            ],
            'update' => [
                'success' => 'Produkt zaktualizowany!'
            ],
            'delete' => [
                'success' => 'Produkt usunięty!'
            ],
        ],
        'fields' => [
            'name' => 'Nazwa',
            'description' => 'Opis',
            'amount' => 'Ilość',
            'price' => 'Cena',
            'image' => 'Grafika',
            'category' => 'Kategoria',
            'sum' => 'Suma',
            'sum_order' => 'Suma zamówienia',
        ]
    ]
];