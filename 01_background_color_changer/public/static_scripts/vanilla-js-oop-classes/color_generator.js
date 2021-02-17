class ColorGenerator {
    static randomHexColor() {
        let color = "#"
        for (let i = 0; i < 6; i++)
            color += this.generateHexDigit()
        return color;
    }

    static generateHexDigit() {
        return Math.round(Math.random() * 15).toString(16);
    }
}