# Zmrzlinový domek — web

Statický web pro zmrzlinárnu **Zmrzlinový domek** (Nučnice, u přívozu).
Zdroj bez buildu, `build.py` z něj vyrábí zminifikovanou verzi pro nasazení.

Barevnost: růžová `#E19FC3` + font **Lato** (podle jejich stávajícího webu).

> Novější verze webu je v samostatné složce/repozitáři
> [`zmrzlinovy-domek-v2`](https://github.com/Jarousek06/zmrzlinovy-domek-v2)
> (víc reálných fotek). Tenhle repozitář je starší verze, ponechaná pro historii.

## Struktura

```
zmrzlinovy-domek/
├── index.html
├── assets/          styl, skripty, obrázky (zdroj)
├── build.py         minifikace + sestavení dist/ a ZIPu pro Netlify
├── dist/            vygenerovaný výstup pro nasazení
└── README.md
```

## Lokální spuštění (zdroj)

```bash
python -m http.server 5189 --directory zmrzlinovy-domek
```

Pak otevřít http://localhost:5189 (v `.claude/launch.json` konfigurace `zmrzlinovy-domek`).

## Build a nasazení

```bash
python zmrzlinovy-domek/build.py
```

Vytvoří `zmrzlinovy-domek/dist/` a ZIP připravený pro
[Netlify Drop](https://app.netlify.com/drop). Upravuje se vždy zdroj mimo `dist/`,
ten se přegeneruje buildem.
