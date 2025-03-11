import Permissions from './index'; // Adjust the import path as needed

// Define the permissions instance globally for all tests
const permissions = new Permissions([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
]);

describe('Permissions', () => {
    test('to', () => {
        expect(permissions.to(["1", "2", "4"])).toBe(11);
    });

    test('from', () => {
        expect(permissions.from(11)).toEqual(['1', '2', '4']);
    });

    test('to/from', () => {
        const perms = ["1", "2", "4"];
        const bitwisePerms = permissions.to(perms);
        const permsArray = permissions.from(bitwisePerms);

        expect(permsArray).toEqual(perms);
    });
});