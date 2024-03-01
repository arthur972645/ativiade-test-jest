const conversorDeTemperatura = require('./index1.js')

TextDecoderStream('verificar se ta correto', () => {
    export(conversorDeTemperatura(100)).toBe(212);
})