# Plan

## HTML

-   on main page
    -   section for list of food items
    -   render each item from supabase on page load
-   on detail page
    -   header with link to home page
    -   section for details
        -   divs for each detail element

## Events

-   home page load
    -   fetch all items from supabase
    -   display all items
        -   loop through all items, render, and append to container
-   detail page load
    -   fetch single item from supabase (by ID)
    -   render to page based on item's info
    -   use URLSearchParams to get the item's ID

## Functions

-   fetch-utils (getItem, getItemById)
-   render-utils (renderItemCard, renderItemDetail)

## Slices

1. get all items to render to home page load
2. make item cards clickable & move to detail page
3. get detail page to render with appropriate details (hard-coded id)
4. use URLSearchParams to fill in ID dynamically
