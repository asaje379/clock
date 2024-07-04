const _toggle = 'toggle';
const toggleActive = 'toggle-active';
const toggleBulletInactive = 'toggle-bullet-inactive';
const toggleBulletActive = 'toggle-bullet-active';
const toggleBullet = 'toggle-bullet';

/**
 * @param {string} id Toggle id
 */
function toggle(id) {
  const toggleElement = document.getElementById(id);
  if (toggleElement) {
    const toggleBulletElement = toggleElement.querySelector(`.${toggleBullet}`);
    if (toggleElement.classList.contains(toggleActive)) {
      toggleElement.className = _toggle;
      toggleBulletElement.className = `${toggleBullet} ${toggleBulletInactive}`;
      return false;
    }

    toggleElement.className = `${_toggle} ${toggleActive}`;
    toggleBulletElement.className = `${toggleBullet} ${toggleBulletActive}`;
    return true;
  }
  return false;
}

/**
 * @param {string} ids List of toggle ids
 */
function handleToggleStateChange(id, cb) {
  const toggleElement = document.getElementById(id);

  toggleElement.addEventListener('click', () => {
    const isActive = toggle(id);
    cb(isActive);
  });
}
