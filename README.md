# Simple Permissions

`simple-perms` is a lightweight TypeScript library for managing permissions using bitwise operations. It allows you to easily convert permission strings into bitwise numbers and vice versa, making it perfect for access control, feature flags, and role-based systems.

## Features

- Convert permissions to bitwise numbers: Combine permission strings into a single number.
- Convert bitwise numbers to permissions: Extract permission strings from a bitwise number.
- Validation: Throws an error for invalid permissions.
- Lightweight: No dependencies, just pure TypeScript.

## Installation

To use the `Permissions` class, simply copy the code into your project or install it via npm (if published as a package).

```bash
npm install simple-perms
```

## Usage

Here’s a complete example demonstrating how to use the `Permissions` class:

```typescript
import Permissions from 'simple-perms';

// Initialize with available permissions
const permissions = new Permissions([
    "read",
    "write",
    "delete",
    "admin"
]);

// Convert permissions to a bitwise number
const bitwisePerms = permissions.to(["read", "write"]);
console.log(bitwisePerms); // Output: 3

// Convert the bitwise number back to permissions
const permsArray = permissions.from(3);
console.log(permsArray); // Output: ["read", "write"]

// Handling invalid permissions
try {
    const invalidPerms = permissions.to(["read", "invalid"]);
} catch (error) {
    console.error(error.message); // Output: Invalid permission: invalid
}
```

## Methods

### `to(perms: string[]): number`

Converts an array of permission strings into a bitwise number.

- **Parameters**:
  - `perms`: An array of permission strings (e.g., `["read", "write"]`).
- **Returns**: A bitwise number representing the combined permissions.
- **Throws**: An error if any permission in `perms` is not in the original permissions array.

```typescript
const bitwisePerms = permissions.to(["read", "write"]);
console.log(bitwisePerms); // Output: 3
```

### `from(bitwisePerms: number): string[]`

Converts a bitwise number back into an array of permission strings.

- **Parameters**:
  - `bitwisePerms`: A bitwise number representing the combined permissions.
- **Returns**: An array of permission strings.

```typescript
const permsArray = permissions.from(3);
console.log(permsArray); // Output: ["read", "write"]
```

## How It Works

1. **Bitwise Mapping**:
   - Each permission string is assigned a unique bitwise value using `1 << index`. For example:
     - `"read"` → `1` (`1 << 0`)
     - `"write"` → `2` (`1 << 1`)
     - `"delete"` → `4` (`1 << 2`)
     - `"admin"` → `8` (`1 << 3`)

2. **Combining Permissions**:
   - The `to` method uses the bitwise OR (`|`) operator to combine permissions into a single number.
     - `["read", "write"]` → `1 | 2` → `3`

3. **Extracting Permissions**:
   - The `from` method uses the bitwise AND (`&`) operator to check which permissions are set in the bitwise number.
     - `3 & 1` → `1` (true for `"read"`)
     - `3 & 2` → `2` (true for `"write"`)
     - `3 & 4` → `0` (false for `"delete"`)
     - `3 & 8` → `0` (false for `"admin"`)

## Error Handling

- If you pass an invalid permission to the `to` method, it will throw an error:
  ```typescript
  try {
      const invalidPerms = permissions.to(["read", "invalid"]);
  } catch (error) {
      console.error(error.message); // Output: Invalid permission: invalid
  }
  ```

## Use Cases

- **Access Control**: Manage user permissions in an application.
- **Feature Flags**: Enable or disable features based on permissions.
- **Role-Based Systems**: Assign roles with specific permissions.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

---

## Support

If you have any questions or need help, feel free to open an issue on GitHub.
