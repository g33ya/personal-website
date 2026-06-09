export default function loadProjectImages(projectName) {
  return Object.entries(
    import.meta.glob(
      '../assets/projects/*/*.png',
      { eager: true, import: 'default' }
    )
  )
    .filter(([path]) => path.includes(`/${projectName}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, image]) => image);
}