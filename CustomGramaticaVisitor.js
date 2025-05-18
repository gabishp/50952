import gramaticaVisitor from './generated/gramaticaVisitor.js';
import gramaticaParser from './generated/gramaticaParser.js';

class CustomGramaticaVisitor extends gramaticaVisitor {
    constructor() {
        super();
    }

    // Visita la regla principal 'schedule'
    visitSchedule(ctx) {
        console.log('Visitando schedule:');
        for (let i = 0; i < ctx.time_field().length; i++) {
            this.visit(ctx.time_field(i));
        }
    }

    // Visita cada campo de tiempo
    visitTime_field(ctx) {
        if (ctx.value()) {
            console.log('Campo: valor simple ->', ctx.value().getText());
        } else if (ctx.range()) {
            console.log('Campo: rango ->', ctx.range().getText());
        } else if (ctx.step()) {
            console.log('Campo: paso ->', ctx.step().getText());
        } else if (ctx.wildcard()) {
            console.log('Campo: comodín ->', ctx.wildcard().getText());
        } else if (ctx.list()) {
            console.log('Campo: lista ->', ctx.list().getText());
        } else if (ctx.predefined()) {
            console.log('Campo: palabra reservada ->', ctx.predefined().getText());
        }
    }
}

export default CustomGramaticaVisitor;
