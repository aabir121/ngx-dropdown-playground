# ngx-bootstrap Dropdown Wrapper: Sample Application

This is a simple sample application built to demonstrate how to extend and configure the capabilities of the ngx-bootstrap dropdown module. The project explores various dropdown functionalities, including hover-based interaction, toolbox features, nested menus, and the integration of Angular CDK for advanced behaviors like dragging.

## Key Features

1. **Hover-based Dropdown**:  
   The default click behavior of ngx-bootstrap dropdowns is replaced with a hover-based interaction, providing a more intuitive user experience.

2. **Horizontal Menu**:  
   A sample horizontal menu is included to show how the dropdown can be used to display tool options. It ensures proper positioning even when the toolbox is maximized and includes a loading spinner to demonstrate dynamic width adaptation.

3. **Draggable Div**:  
   Using Angular CDK, some divs are made draggable, to showcase the adaptive positioning of the horizontal menu.

4. **Nested Menus**:  
   A sidebar is included to demonstrate how the dropdown component can be configured to support nested menus, showcasing how multi-level menus can be easily handled.

5. **Recursive Component Handling**:  
   The application also demonstrates how to handle recursive rendering of components, which is particularly useful for building deeply nested dropdowns.

## Purpose

The main goal of this project is to showcase different configurations and behaviors that can be applied to ngx-bootstrap dropdowns. It serves as a practical reference for implementing:

- Hover-based dropdown triggers
- Horizontal menu with variable width
- Draggable and maximizable divs to showcase how to handle adaptive positioning
- Nested menus with recursive component handling

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- Angular CLI
- ngx-bootstrap (Dropdown module)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/aabir121/custom-menu.git
    ```

2. Navigate to the project directory:

    ```bash
    cd custom-menu
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the application:

    ```bash
    ng serve
    ```

5. Open your browser at `http://localhost:4200/` to see the application in action.

The code is structured to make it easy to extend or modify as needed.
