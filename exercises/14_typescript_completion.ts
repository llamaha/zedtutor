// TypeScript Completion Practice
// Experience enhanced completion with TypeScript's type system

// PRACTICE 1: Interface Property Completion
interface User {
    id: string;
    name: string;
    email: string;
    age: number;
    roles: string[];
    metadata?: {
        lastLogin: Date;
        preferences: Record<string, any>;
    };
}

// Create a user object and see property completion
const user: User = {
    // Start typing here - see required properties first
    
};

// PRACTICE 2: Type-based Method Completion
const numbers: number[] = [1, 2, 3, 4, 5];
// Type: numbers. (dot)
// Only array methods that work with numbers shown

const text: string = "Hello TypeScript";
// Type: text. (dot)
// Only string methods available

// PRACTICE 3: Generic Type Completion
class DataStore<T> {
    private items: T[] = [];
    
    add(item: T): void {
        this.items.push(item);
    }
    
    find(predicate: (item: T) => boolean): T | undefined {
        return this.items.find(predicate);
    }
    
    getAll(): T[] {
        return [...this.items];
    }
}

const userStore = new DataStore<User>();
// Type: userStore. (dot)
// Methods are typed with User

// When calling userStore.add(), see User property completion
// userStore.add({
//     // Completion here knows it needs User properties
// });

// PRACTICE 4: Enum Completion
enum Status {
    Draft = 'DRAFT',
    Published = 'PUBLISHED',
    Archived = 'ARCHIVED'
}

enum Priority {
    Low = 1,
    Medium = 2,
    High = 3,
    Critical = 4
}

// Type: Status. (dot)
// See enum values

// Type: Priority. (dot)
// See numeric enum values

// PRACTICE 5: Union Type Completion
type Action = 
    | { type: 'CREATE'; payload: { name: string } }
    | { type: 'UPDATE'; payload: { id: string; changes: Partial<User> } }
    | { type: 'DELETE'; payload: { id: string } };

function handleAction(action: Action) {
    if (action.type === 'CREATE') {
        // action.payload. (dot) - knows it has 'name'
    } else if (action.type === 'UPDATE') {
        // action.payload. (dot) - knows it has 'id' and 'changes'
    }
}

// PRACTICE 6: Function Overload Completion
function processData(data: string): string;
function processData(data: number): number;
function processData(data: string[]): string[];
function processData(data: any): any {
    return data;
}

// Type: processData(
// See different overload signatures

// PRACTICE 7: Utility Type Completion
type PartialUser = Partial<User>;
type ReadonlyUser = Readonly<User>;
type RequiredUser = Required<User>;
type UserKeys = keyof User;

// See how completion changes with each utility type
const partial: PartialUser = {
    // All properties are optional now
};

// PRACTICE 8: Import Type Completion
// Try importing types:
// import { User } from './
// See type exports from other files

// PRACTICE 9: Async Type Completion
async function fetchUser(id: string): Promise<User> {
    // Return value must be User
    return {
        // Completion knows User shape
    };
}

// When using the function:
// const user = await fetchUser('123');
// user. (dot) - knows it's User type

// PRACTICE 10: Mapped Type Completion
type UserGetters = {
    [K in keyof User as `get${Capitalize<K>}`]: () => User[K]
};

// This creates: getId, getName, getEmail, etc.
const getters: UserGetters = {
    // Start typing get... to see mapped methods
};

// PRACTICE 11: Conditional Type Completion
type IsString<T> = T extends string ? true : false;
type IsUser<T> = T extends User ? T : never;

type Test1 = IsString<string>;    // true
type Test2 = IsString<number>;    // false
type Test3 = IsUser<User>;        // User
type Test4 = IsUser<string>;      // never

// PRACTICE 12: Template Literal Type Completion
type EventName = 'click' | 'focus' | 'blur';
type EventHandler<T extends EventName> = `on${Capitalize<T>}`;

// This creates: 'onClick' | 'onFocus' | 'onBlur'
type Handlers = EventHandler<EventName>;

const handlers: Record<EventHandler<EventName>, Function> = {
    // Type on... to see handler names
};

/* Advanced Completion Tips:
 * - TypeScript provides better completion than JavaScript
 * - Type annotations improve completion accuracy
 * - Generic types maintain type safety in completion
 * - Use strict mode for best completion experience
 * - Install @types packages for library completion
 */

// YOUR PRACTICE SPACE
// Create your own typed structures and test completion: