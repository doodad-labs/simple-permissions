export default class Permissions {
    private permissions: string[];
    private permissionMap: { [key: string]: number };

    constructor(permissions: string[]) {
        this.permissions = permissions;
        this.permissionMap = this.createPermissionMap(permissions);
    }

    // Create a map of permission strings to their corresponding bitwise values
    private createPermissionMap(permissions: string[]): { [key: string]: number } {
        return permissions.reduce((map, permission, index) => {
            map[permission] = 1 << index; // Shift 1 by index to create a unique bitwise value
            return map;
        }, {} as { [key: string]: number });
    }

    // Convert an array of permission strings to a bitwise number
    public to(perms: string[]): number {
        // Validate that all permissions passed to `to` are valid
        perms.forEach(perm => {
            if (!this.permissions.includes(perm)) {
                throw new Error(`Invalid permission: ${perm}`);
            }
        });

        return perms.reduce((result, perm) => {
            result |= this.permissionMap[perm]; // Bitwise OR to combine permissions
            return result;
        }, 0);
    }

    // Convert a bitwise number back to an array of permission strings
    public from(bitwisePerms: number): string[] {
        return this.permissions.filter(perm => {
            return (bitwisePerms & this.permissionMap[perm]) !== 0; // Bitwise AND to check if permission is set
        });
    }
}