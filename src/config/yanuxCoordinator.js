const yanuxCoordinador = {
    components_restrictions: {
        "screen": {
            "showByDefault": true,
            "type": { "value": "smartphone", "enforce": false },
            "display": {
                "operator": "AND",
                "values": {
                    "virtualResolution": { "operator": ">=", "value": [1024, null] },
                    "size": { "operator": ">=", "value": [160, 90], "enforce": false }
                }
            }
        },
        "keypad": {
            "showByDefault": true,
            "type": { "value": "smartphone", "enforce": false },
            "display": true,
            "input": { "operator": "OR", "values": ["mouse", "touchscreen"] }
        }
    }
}

export default yanuxCoordinador