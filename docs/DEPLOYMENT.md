# Despliegue en GitHub Pages

El repositorio esperado es `oprbguitar/19082026amaru.online`, rama `main`. El workflow `.github/workflows/deploy.yml` usa Node 20, ejecuta `npm ci`, `npm run build`, sube `dist/` y despliega con las acciones oficiales de Pages.

## Configuración inicial

1. En GitHub, abre **Settings → Pages**.
2. En **Build and deployment**, selecciona **GitHub Actions**.
3. Confirma que el workflow tenga permiso de Pages y Actions.
4. Publica en `main` y espera a que termine el workflow.

La URL de proyecto es `https://oprbguitar.github.io/19082026amaru.online/`. El `base` de Astro y las rutas de assets ya apuntan a ese prefijo. Si se configura un dominio propio, actualiza `site`, `base`, canonical, sitemap y el manifest.

## Publicación local

```bash
git status
git add .
git commit -m "feat: build responsive Amaru digital library portal"
git push -u origin main
```

No se deben publicar `node_modules`, `dist`, capturas temporales ni secretos.
