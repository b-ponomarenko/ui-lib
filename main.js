(function() {
  window.jQ = function(selector) {
    if (!(typeof selector === 'string')) {
      throw new Error('Selector must be a string value');
    }

    return {
      addClass: addClass.bind(document.querySelectorAll(selector)),
      hasClass: hasClass.bind(document.querySelectorAll(selector)),
      removeClass: removeClass.bind(document.querySelectorAll(selector)),
      toggleClass: toggleClass.bind(document.querySelectorAll(selector)),
    };
  }

  const removeClass = function(className) {
    const elements = this;

    [...elements].forEach((element) => {
      const classList = element.classList.remove(className);
    })
  }

  const toggleClass = function(className) {
    const elements = this;

    [...elements].forEach((element) => {
      const classList = element.classList.toggle(className);
    })
  }


  const addClass = function(className) {
    const elements = this;

    [...elements].forEach((element) => {
      const classList = element.classList.add(className);
    })
  }

  const hasClass = function(className) {
    const elements = this;
    let hasClass = false;

    [...elements].forEach((element) => {
      const classList = element.classList;

      if (classList.contains(className)) {
        hasClass = true;
      }
    });

    return hasClass;
  }
})();
