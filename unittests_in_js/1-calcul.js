function calculateNumber(type, a, b) {
    if (type === "SUM") {
        return Math.round(a) + Math.round(b)
    }

    else if (type === "SUBTRACT") {
        return Math.round(a) - Math.round(b)
    }

    else if (type === "DIVIDE") {
        let aa = Math.round(a)
        let bb = Math.round(b)
        if (bb === 0) {
            return "Error"
        } else {
            return aa / bb
        }
    }
}

module.exports = calculateNumber