# Project Color Structure

## Overview

This project uses a structured approach to manage its color scheme, divided into two main parts:

1. **Color Definitions (`_color-definitions.scss`):** This file contains all the individual color variable definitions. It's the core of our color system, listing all primary, secondary, and any other categorized colors used across the project.

2. **Utility Colors Map (`_utility-colors.scss`):** This file imports the individual color definitions and organizes them into a structured `$colors` map. This map is used throughout the project to access and apply color variables consistently.

## Guidelines for Updating Colors

### Adding or Modifying Colors

1. **Update Color Definitions:**

   - When adding a new color or modifying an existing one, start by updating the `_color-definitions.scss` file.
   - Add your new color variable in the respective category section (e.g., primary, secondary).
   - Follow the naming convention: `$[category]-[shade]: [color-value];`
   - Example: `$primary-600: #123456;`

2. **Reflect Changes in Utility Colors Map:**
   - After updating the `_color-definitions.scss` file, ensure to reflect these changes in the `_utility-colors.scss` file.
   - Add or update the corresponding entry in the `$colors` map.
   - Make sure the color category and shade match with the definitions.
   - Example: For `$primary-600`, add `'600': $primary-600` under the "primary" key in the map.

### Consistency and Validation

- Ensure that every color variable defined in `_color-definitions.scss` is represented in `_utility-colors.scss`.
- Validate your changes by checking if the new colors are correctly applied where used.
- Avoid removing or renaming existing colors without proper validation, as it might affect existing uses across the project.

## Conclusion

By following these guidelines, we maintain a consistent and organized color system in our project. This approach facilitates easier maintenance, updates, and ensures uniformity in the application of our color palette.
