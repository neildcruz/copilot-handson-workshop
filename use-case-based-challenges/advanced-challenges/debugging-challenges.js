// Challenge 1: Memory Leak Detection
// TODO: Find and fix the memory leak in this cache implementation
class Cache {
    constructor() {
        this.cache = new Map();
        this.eventListeners = [];
    }

    addListener(callback) {
        this.eventListeners.push(callback);
        // Bug: Missing removeListener method
    }

    set(key, value, ttl = 3600) {
        this.cache.set(key, {
            value,
            expires: Date.now() + (ttl * 1000)
        });
        // Bug: Creates new function reference on every call
        setInterval(() => this.checkExpiration(key), 1000);
        this.notifyListeners('set', key);
    }

    checkExpiration(key) {
        const item = this.cache.get(key);
        if (item && item.expires <= Date.now()) {
            this.cache.delete(key);
            this.notifyListeners('expire', key);
        }
    }

    notifyListeners(event, key) {
        this.eventListeners.forEach(listener => listener(event, key));
    }
}

// Challenge 2: Race Condition
// TODO: Fix the race condition in this order processing system
class OrderProcessor {
    constructor() {
        this.inventory = new Map();
        this.pendingOrders = new Set();
    }

    async processOrder(orderId, items) {
        // Bug: Race condition in inventory check and update
        for (const [itemId, quantity] of items) {
            const available = this.inventory.get(itemId) || 0;
            if (available < quantity) {
                throw new Error('Insufficient inventory');
            }
        }

        this.pendingOrders.add(orderId);

        for (const [itemId, quantity] of items) {
            const available = this.inventory.get(itemId) || 0;
            this.inventory.set(itemId, available - quantity);
        }

        await this.finalizeOrder(orderId);
        this.pendingOrders.delete(orderId);
    }

    async finalizeOrder(orderId) {
        // Simulated async operation
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// Challenge 3: Performance Bottleneck
// TODO: Identify and fix the performance issues
class DataProcessor {
    constructor() {
        this.data = new Array(10000).fill(0)
            .map(() => ({ 
                id: Math.random().toString(36),
                value: Math.random() * 1000
            }));
    }

    // Bug: Inefficient data processing
    processData(threshold) {
        const results = [];
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data.length; j++) {
                if (i !== j && 
                    Math.abs(this.data[i].value - this.data[j].value) < threshold) {
                    results.push([this.data[i], this.data[j]]);
                }
            }
        }
        return results;
    }

    // Bug: Excessive object creation
    generateReport() {
        return this.data.map(item => {
            return {
                ...item,
                timestamp: new Date().toISOString(),
                processed: true,
                metadata: {
                    source: 'DataProcessor',
                    version: '1.0'
                }
            };
        });
    }
}