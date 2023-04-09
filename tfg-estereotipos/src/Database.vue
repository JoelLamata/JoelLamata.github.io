<script>
import green from './images/green.png'

import juguetesParaNiñas from './images/JuguetesParaNiñas.png'
import mujerExitosa from './images/mujer-exitosa.png'
import fantasy from './images/fantasy.jpg'
import marioPaper from './images/mario-paper.jpg'
import sonrisa from './images/sonrisa.jpg'

const triangle = 'polygon(50% 0%, 0% 100%, 100% 100%)'
const octagon = 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
const trapezoid = 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)'
const hexagon = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'

const Levels = {1: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                2: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                3: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                4: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                5: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                6: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                7: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                8: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                9: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                10: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                11: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                12: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                13: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                14: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                15: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                16: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                17: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                18: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                19: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                20: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    },
                21: 
                    { 
                        'defaultImages': [marioPaper, sonrisa, marioPaper, sonrisa, marioPaper, sonrisa],
                        'replacementImages': [{"image": juguetesParaNiñas, "label": 'pequeño'}, {"image": mujerExitosa, "label": "niña"}, {"image": fantasy, "label": "color rosa"}, {"image": green, "label": "juguete"}],
                        'poliForm': [octagon, triangle],
                        'placeholder': 'Juguete para niñas',
                        'poliNum': 3,
                        'badPoliNum': 1,
                        'poliText': ['niña', 'juguete', 'pequeño'],
                        'badPoliText': ['color rosa'],
                        'points': 0
                    }
                }

export default{
    Levels
}
</script>