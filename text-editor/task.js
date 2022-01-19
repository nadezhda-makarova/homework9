class Editor {
  constructor(container) {
    this.container = container;
    this.editor = document.getElementById('editor');
    this.saveValue = localStorage.getItem('value');

    this.getValue();

    this.editor.addEventListener('input', (e) => {
      localStorage.setItem('value', e.target.value)
    });
  };

  getValue() {
    const value = localStorage.getItem('value');
    this.editor.value = value;
  };
};


new Editor( document.querySelector( '.content' ));