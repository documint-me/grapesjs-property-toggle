export default (editor, opts = {}) => {
  const options = {
    ...{
      // default options
    }, ...opts
  };

  editor.Styles.addType('toggle', {
    // Create UI
    create({ props, change, property }) {
      const { $ } = property.em.get('Editor');
      const { view: { pfx, ppfx }, cid } = property;
      const itemCls = `${ppfx}radio-item-label`;
      const clsInput = `${pfx}radio ${pfx}radio-${props.property}`;
      const cls = props.iconClass ? `${props.iconClass} ${pfx}icon ${itemCls}` : '';
      const titleAttr = props.title ? `title="${props.title}"` : '';
      const id = props.id || props.value;
      const labelEl = cls ? '' : (props.label || props.name || id);
      const elId = `${props.property}-${id}-${cid}`;

      const $el = $(`<div class="${ppfx}field ${ppfx}field-radio">
        <div class="${ppfx}radio-items">
          <div class="${ppfx}radio-item">
            <input id="${elId}" name="${props.property}-${cid}" value="${props.on}" class="${clsInput}" type="checkbox"/>
            <label class="${cls || itemCls}" ${titleAttr} for="${elId}">${labelEl}</label>
          </div>
        </div>
      </div>`);

      const $inputEl = $el.find('input[type=checkbox]');

      // Event below will triggers emit
      $inputEl.on('change', (event) => change({ event }));
      $inputEl.on('input', (event) => change({ event, partial: true }));

      return $el.get(0);
    },

    // Propagate UI changes up to the targets
    emit({ props, updateStyle }, { event, partial }) {
      const { checked } = event.target;
      updateStyle(checked ? props.on : props.off, { partial });
    },

    // Update UI
    update({ value, el, props }) {
      el.querySelector('input[type=checkbox]').checked = value === props.on;
    },

    // Clean memory if required
    destroy() { }
  });
};