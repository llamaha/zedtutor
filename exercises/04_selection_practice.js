// Selection Practice - Use smart selection to efficiently select code blocks

// Practice 1: Expand selection from inside these nested structures
function calculateTotal(items) {
    return items.reduce((sum, item) => {
        if (item.active) {
            return sum + (item.price * item.quantity);
        }
        return sum;
    }, 0);
}

// Practice 2: Try selecting different parts of this object
const config = {
    app: {
        name: "Zedtutor",
        version: "1.0.0",
        features: {
            navigation: true,
            editing: true,
            collaboration: false
        }
    },
    server: {
        port: 3000,
        host: "localhost",
        ssl: {
            enabled: true,
            cert: "/path/to/cert.pem",
            key: "/path/to/key.pem"
        }
    }
};

// Practice 3: Select individual arguments, then the entire parameter list
function createUser(firstName, lastName, email, role = 'user', isActive = true) {
    return {
        id: Date.now(),
        firstName,
        lastName,
        email,
        role,
        isActive,
        createdAt: new Date().toISOString()
    };
}

// Practice 4: Complex expression selection
const result = array
    .filter(item => item.value > 10)
    .map(item => ({
        ...item,
        doubled: item.value * 2,
        label: `Item ${item.id}: ${item.name}`
    }))
    .sort((a, b) => b.doubled - a.doubled)
    .slice(0, 5);

// Practice 5: Try selecting different levels of this JSX-like structure
const component = (
    <div className="container">
        <header>
            <h1>{title}</h1>
            <nav>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
        <main>
            <section id="content">
                <p>Welcome to the selection practice!</p>
            </section>
        </main>
    </div>
);

/* Selection Tips:
 * 1. Place cursor inside any bracket and expand selection
 * 2. Each expansion selects the next logical parent
 * 3. Use shrink selection to go back
 * 4. Great for refactoring - select then extract!
 */