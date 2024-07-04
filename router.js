const footerItemActive = 'footer-item-active';
const routes = [
  { path: 'alarm-page', active: true },
  { path: 'clock-page', active: false },
  { path: 'stop-watch-page', active: false },
  { path: 'timer-page', active: false },
];

/**
 * @param {path} path Path to navigate to
 */
function navigate(path) {
  const route = routes.find((r) => r.path === path);
  if (!route) return;
  for (const route of routes) {
    route.active = false;
  }
  route.active = true;
  renderRoutes();
}

function renderRoutes() {
  for (const route of routes) {
    const content = document.getElementById(route.path);
    const triggerContent = document.getElementById(`${route.path}-trigger`);
    content.style.display = route.active ? '' : 'none';
    handleTriggerActive(triggerContent, route);
  }
}

function handleTriggerActive(content, route) {
  if (route.active) {
    return content.classList.add(footerItemActive);
  }
  content.classList.remove(footerItemActive);
}

function initRouter() {
  for (const route of routes) {
    const triggerContent = document.getElementById(`${route.path}-trigger`);
    triggerContent.addEventListener('click', () => {
      navigate(route.path);
      console.log('route:', route);
    });
  }
  renderRoutes();
}
