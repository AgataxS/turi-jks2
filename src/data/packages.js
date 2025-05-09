

    export const packages = [
      
      {
        id: 1,
        code: "SJ-FD",
        slug: "uyuni-full-day",
        name: "Salar de Uyuni – Full Day",
        duration: "1 día",
        price: 1400,
        color: "primary",
    
        hero: "/assets/images/uyuni-full-day-hero.jpg",
        gallery: [
          "/assets/images/uyuni-full-day-1.jpg",
          "/assets/images/uyuni-full-day-2.jpg",
          "/assets/images/uyuni-full-day-3.jpg",
        ],
    
        summary:
          "Cementerio de Trenes · Colchani · Hotel de Sal · Isla Incahuasi · Puesta de sol y brindis.",
    
        description: `Tour de día completo por el mayor desierto de sal del mundo. Iniciamos en el Cementerio de Trenes (locomotoras de 1890), continuamos en la factoría de sal de Colchani y nos adentramos en el Salar para apreciar montículos de sal, el primer Hotel de Sal “Playa Blanca” y el Monumento Dakar. Realizamos sesión de fotos de perspectiva, caminata en Isla Incahuasi con cactus gigantes de 10 m y cerramos con la puesta de sol acompañada de brindis con licores andinos.`,
    
        includes: [
          "Transporte 4×4 (máx. 6 pax)",
          "Almuerzo buffet en medio del salar",
          "Guía local (ES-EN)",
          "Brindis al atardecer: licores andinos + piqueo",
          "Botiquín básico y oxígeno",
        ],
        notIncludes: [
          "Entrada Isla Incahuasi (30 Bs.)",
          "Seguro de viaje",
          "Gastos personales y propinas",
        ],
        itinerary: [
          { time: "10:00", activity: "Salida Uyuni – Cementerio de Trenes" },
          { time: "10:45", activity: "Factoría de sal Colchani" },
          { time: "12:30", activity: "Hotel de Sal / Monumento Dakar" },
          { time: "14:00", activity: "Almuerzo buffet en el salar" },
          { time: "15:30", activity: "Sesión de fotos de perspectiva" },
          { time: "16:30", activity: "Isla Incahuasi (caminata 45 min)" },
          { time: "18:00", activity: "Puesta de sol + brindis" },
          { time: "18:30", activity: "Retorno a Uyuni" },
        ],
      },
    
      
      {
        id: 2,
        code: "SJ-STH",
        slug: "uyuni-thunupa-2d1n",
        name: "Salar + Volcán Thunupa (2D/1N)",
        duration: "2 días / 1 noche",
        price: 3550,
        color: "primary",
    
        hero: "/assets/images/uyuni-thunupa-hero.jpg",
        gallery: [
          "/assets/images/uyuni-thunupa-1.jpg",
          "/assets/images/uyuni-thunupa-2.jpg",
        ],
    
        summary:
          "Full Day salar, noche en hotel de sal y trekking mirador Thunupa.",
    
        description: `Día 1: recorrido clásico por el Salar, esculturas de sal y puesta de sol a los pies del Thunupa con brindis.  
    Día 2: ascenso hasta el Mirador Thunupa (4 325 msnm) para vistas panorámicas, visita a chullpares tiwanacotas y bofedales de Coqueza.`,
    
        includes: [
          "Transporte 4×4 y conductor-guía",
          "1 noche de hospedaje en hotel de sal (hab. con baño privado)",
          "Alimentación completa (1 D / 1 C / 1 D-B)",
          "Equipo de oxígeno y botiquín",
        ],
        notIncludes: [
          "Ingreso Museo Coqueza (10 Bs.)",
          "Seguro de viaje",
          "Bebidas no descritas",
        ],
    
        itinerary: [
          { day: "DÍA 1", title: "Salar clásico", activities: [
            "Cementerio de Trenes • Colchani • Hotel de Sal",
            "Esculturas de sal (Mano de Dios, Escalera al Cielo)",
            "Isla Incahuasi • Puesta de sol & brindis",
          ]},
          { day: "DÍA 2", title: "Volcán Thunupa", activities: [
            "Desayuno • Traslado a Coqueza",
            "Trekking a mirador (4 325 msnm)",
            "Chullpares • Bofedales • Retorno a Uyuni 17 :30",
          ]},
        ],
      },
    
      
      {
        id: 3,
        code: "SJ-SLA",
        slug: "lagunas-altiplanicas-2d1n",
        name: "Lagunas Altiplánicas (2D/1N)",
        duration: "2 días / 1 noche",
        price: 3800,
        color: "secondary",
    
        hero: "/assets/images/lagunas-altiplanicas.jpg",
        gallery: ["/assets/images/lagunas-altiplanicas-1.jpg"],
    
        summary:
          "Lagunas Cañapa · Hedionda · Turquiri · Valle de Rocas · Iglesia San Cristóbal.",
    
        description: `Circuito fotográfico por el salar de Chiguana y la cadena de lagunas alto-andinas llena de flamencos: Cañapa, Hedionda y Turquiri. Incluye visita a mirador Ollagüe, Valle de Rocas e iglesia colonial de San Cristóbal.`,
    
        includes: [
          "Vehículo 4×4, conductor-guía",
          "1 noche de hospedaje básico en Villa Alota",
          "Alimentación completa",
        ],
        notIncludes: ["Ingresos Reserva Eduardo Avaroa (150 Bs.)"],
    
        itinerary: [
          { day: "DÍA 1", title: "Salar de Uyuni ➜ Villa Alota", activities: [
            "Cementerio de Trenes • Colchani • Isla Incahuasi",
            "Puesta de sol en el Salar & traslado a hotel",
          ]},
          { day: "DÍA 2", title: "Lagunas de ruta", activities: [
            "Laguna Cañapa • Hedionda • Turquiri",
            "Valle de Rocas • San Cristóbal • Uyuni 19 :00",
          ]},
        ],
      },
    
      
      {
        id: 4,
        code: "SJ-SLK",
        slug: "laguna-katal-2d1n",
        name: "Laguna Katal & Cañón de la Anaconda (2D/1N)",
        duration: "2 días / 1 noche",
        price: 3800,
        color: "secondary",
    
        hero: "/assets/images/laguna-katal.jpg",
        gallery: ["/assets/images/laguna-katal-1.jpg"],
    
        summary:
          "Valle de Rocas · Laguna Katal · Laguna Vinto · Villa Alota · San Cristóbal.",
    
        description: `Un recorrido escénico al sur de Uyuni: iglesia jesuita de San Cristóbal, bofedales de Villa Alota, Cañón de la Anaconda y caminata sobre humedales rumbo a la laguna escondida Katal. Regreso por Laguna Vinto y Valle de Rocas.`,
    
        includes: [
          "Transporte 4×4",
          "Hospedaje en Villa Alota",
          "Pensión completa",
        ],
        notIncludes: ["Entradas comunitarias (30 Bs.)"],
        itinerary: [
          { day: "DÍA 1", title: "Uyuni ➜ Laguna Katal", activities: [
            "San Cristóbal • Villa Alota • Valle de Rocas",
            "Cañón de la Anaconda • Almuerzo • Laguna Katal",
            "Puesta de sol • Cena & pernocte",
          ]},
          { day: "DÍA 2", title: "Laguna Vinto ➜ Uyuni", activities: [
            "Desayuno • Laguna Vinto • Miradores volcánicos",
            "Almuerzo • Llegada a Uyuni 18 :10",
          ]},
        ],
      },
    
      
      {
        id: 5,
        code: "SJ-SLC",
        slug: "lagunas-colores-3d2n",
        name: "Lagunas de Colores + Reserva Eduardo Avaroa (3D/2N)",
        duration: "3 días / 2 noches",
        price: 5200,
        color: "accent",
    
        hero: "/assets/images/lagunas-colores.jpg",
        gallery: ["/assets/images/lagunas-colores-1.jpg"],
    
        summary:
          "Laguna Colorada · Árbol de Piedra · Géiseres Sol de Mañana · Laguna Verde.",
    
        description: `Expedición completa por el extremo sudoeste potosino. Día 2 dentro de la Reserva Eduardo Avaroa: desierto de Siloli, Árbol de Piedra, miradores volcán Ollagüe y lagunas de flamencos; noche en hospedaje rústico cerca de la Laguna Colorada. Al amanecer visitamos los géiseres Sol de Mañana, aguas termales de Polques y Laguna Verde al pie del Licancabur.`,
    
        includes: [
          "Vehículo 4×4 (máx. 6 pax)",
          "2 noches de alojamiento básico",
          "Alimentación completa (D-A-C)",
          "Botiquín, oxígeno y radio satelital",
        ],
        notIncludes: [
          "Ingreso Reserva (150 Bs.)",
          "Baños termales (10 Bs.)",
        ],
        itinerary: [
          { day: "DÍA 1", title: "Salar de Uyuni clásico", activities: [
            "Colchani • Isla Incahuasi • Puesta de sol",
          ]},
          { day: "DÍA 2", title: "Lagunas altiplánicas", activities: [
            "Cañapa • Hedionda • Árbol de Piedra • L. Colorada",
          ]},
          { day: "DÍA 3", title: "Géiseres & Laguna Verde", activities: [
            "Sol de Mañana • Termales Polques • L. Verde",
            "Retorno a Uyuni 19 :00",
          ]},
        ],
      },
    
      
      {
        id: 6,
        code: "SJ-TOMAVE",
        slug: "tomave-termales-2d1n",
        name: "Tomave Colonial & Aguas Termales (2D/1N)",
        duration: "2 días / 1 noche",
        price: 3600,
        color: "primary",
    
        hero: "/assets/images/tomave.jpg",
        gallery: ["/assets/images/tomave-1.jpg"],
    
        summary:
          "Pulacayo · Iglesia San Miguel · Termales Tomave · Lagunas Negra y Verde.",
    
        description: `Ruta patrimonial hacia el norte de Potosí. Explora el histórico centro minero de Pulacayo y la imponente iglesia colonial de Tomave (1699). Relájate en aguas termales naturales y descubre lagunas de altura rodeadas de bofedales y fauna andina.`,
    
        includes: [
          "Transporte 4×4",
          "Hospedaje en Tomave (hab. privada)",
          "Alimentación completa",
        ],
        notIncludes: ["Ingreso Termales (20 Bs.)"],
        itinerary: [
          { day: "DÍA 1", title: "Pulacayo & Tomave", activities: [
            "Museo locomotoras • Casa Gerencia • Almuerzo",
            "Iglesia San Miguel • Aguas termales • Cena",
          ]},
          { day: "DÍA 2", title: "Lagunas Negra & Verde", activities: [
            "Desayuno • Lagunas • Almuerzo • Retorno Uyuni",
          ]},
        ],
      },
    ];
    