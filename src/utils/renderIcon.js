import React from 'react';

export function renderIcon(showDialog) {
  return (
    <i className="material-icons" id="widget-icon" onClick={showDialog}>
      add_circle_outline
    </i>
  );
}
