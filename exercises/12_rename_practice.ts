// Rename Symbol Practice
// Practice safe renaming across the file and project

// Interface with poor naming - rename to better names
interface usr {  // Rename to 'User'
    id: string;
    nm: string;  // Rename to 'name'
    eml: string; // Rename to 'email'
    pwd: string; // Rename to 'password'
}

// Class with abbreviated name - rename to full name
class UsrMgr {  // Rename to 'UserManager'
    private usrs: Map<string, usr>; // Update type reference

    constructor() {
        this.usrs = new Map();
    }

    // Method with unclear name
    addUsr(u: usr): void {  // Rename parameter 'u' to 'user'
        this.usrs.set(u.id, u);
    }

    // Another poorly named method
    getU(id: string): usr | undefined {  // Rename to 'getUser'
        return this.usrs.get(id);
    }

    // Misleading method name
    checkUsr(id: string): boolean {  // Rename to 'userExists'
        return this.usrs.has(id);
    }

    // Abbreviated method name
    delUsr(id: string): boolean {  // Rename to 'deleteUser'
        return this.usrs.delete(id);
    }

    // Method with typo
    findUserByEmai(eml: string): usr | undefined {  // Fix typo: 'Email'
        for (const [_, u] of this.usrs) {
            if (u.eml === eml) {
                return u;
            }
        }
        return undefined;
    }
}

// Variable with generic name
const mgr = new UsrMgr();  // Rename to 'userManager'

// Function with unclear purpose
function proc(data: usr[]): void {  // Rename to 'processUsers'
    for (const u of data) {  // Rename 'u' to 'user'
        mgr.addUsr(u);
    }
}

// Constants with poor names
const MAX = 100;  // Rename to 'MAX_USERS'
const MIN = 1;    // Rename to 'MIN_USERS'
const DFT = 10;   // Rename to 'DEFAULT_USER_COUNT'

// Type aliases that need better names
type Str = string;  // Rename to something meaningful or remove
type Num = number;  // Same here
type Bool = boolean; // And here

// Enum with abbreviated values
enum Status {
    ACT = 'active',   // Rename to 'ACTIVE'
    INACT = 'inactive', // Rename to 'INACTIVE'
    PEND = 'pending'   // Rename to 'PENDING'
}

// Function using the poorly named types
function validateUsr(u: usr): Bool {  // Fix parameter and return type
    if (!u.nm || u.nm.length < MIN) {
        return false;
    }
    if (!u.eml || !u.eml.includes('@')) {
        return false;
    }
    return true;
}

// Object with method using poor names
const validator = {
    isValidEm(em: string): boolean {  // Rename to 'isValidEmail' and 'email'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(em);
    },

    isValidPw(pw: string): boolean {  // Rename to 'isValidPassword' and 'password'
        return pw.length >= 8;
    },

    checkUsrData(u: usr): boolean {  // Rename method and parameter
        return this.isValidEm(u.eml) && this.isValidPw(u.pwd);
    }
};

// Usage with poor variable names
const u1: usr = {  // Rename to 'user1'
    id: '123',
    nm: 'John Doe',
    eml: 'john@example.com',
    pwd: 'securepass123'
};

const u2: usr = {  // Rename to 'user2'
    id: '456',
    nm: 'Jane Smith',
    eml: 'jane@example.com',
    pwd: 'anotherpass456'
};

// Function with multiple parameters to rename
function createUsrProfile(
    i: string,    // Rename to 'id'
    n: string,    // Rename to 'name'
    e: string,    // Rename to 'email'
    p: string     // Rename to 'password'
): usr {
    return { id: i, nm: n, eml: e, pwd: p };
}

// Array with poor name
const usrList: usr[] = [u1, u2];  // Rename to 'userList'

// Loop variable renaming
for (const u of usrList) {  // Rename 'u' to 'user'
    if (validateUsr(u)) {
        proc([u]);
    }
}

// Nested function with rename opportunities
function processUsrBatch() {
    const tempUsrs: usr[] = [];  // Rename to 'temporaryUsers'
    
    function addToTemp(u: usr) {  // Rename parameter
        tempUsrs.push(u);
    }
    
    function getTempCount(): Num {  // Fix return type
        return tempUsrs.length;
    }
    
    return { addToTemp, getTempCount };
}

// Callback with poor parameter names
usrList.forEach((u, i, a) => {  // Rename to meaningful names
    console.log(`Processing user ${i}: ${u.nm}`);
});

// Export with names that need fixing
export { UsrMgr, usr, proc, validateUsr };

/* Rename Symbol Exercises:
 * 1. Rename 'usr' interface to 'User' everywhere
 * 2. Rename all abbreviated property names to full names
 * 3. Rename 'UsrMgr' class to 'UserManager'
 * 4. Fix all method names to be descriptive
 * 5. Rename all single-letter parameters to meaningful names
 * 6. Fix the typo in 'findUserByEmai'
 * 7. Rename generic variable names like 'mgr' and 'proc'
 * 8. Update all type references after renaming
 * 9. Ensure exports are updated with new names
 * 10. Verify all usages are updated across the file
 * 
 * Tips:
 * - Use rename symbol on each identifier
 * - Check the preview before confirming
 * - Rename will update all references automatically
 * - Start with types/interfaces, then classes, then variables
 */