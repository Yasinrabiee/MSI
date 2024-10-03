const menu = $(`.header__icon`);

$(`.header__icon svg`).click(function() {
	menu.toggleClass(`active`)
	if(menu.hasClass(`active`)) {
		$(`.nav__menu`).css(`right`,`0`);
		$(`.header__icon svg:first-child`).css(`display`, `none`);
		$(`.header__icon svg:last-child`).css(`display`, `block`);

	} else {
		$(`.nav__menu`).css(`right`,`-300px`);
		$(`.header__icon svg:first-child`).css(`display`, `block`);
		$(`.header__icon svg:last-child`).css(`display`, `none`);
	}
});

const lazyLoadingElem = $(`.lazy-loading`);
console.log(lazyLoadingElem);

function loadElements() {
	lazyLoadingElem.each(function() {
		const elem = $(this);
		if(elem.offset().top < $(window).scrollTop() + $(window).height())
			elem.addClass(`loaded`);
	});
}

loadElements();

$(window).on(`scroll`, function() {
	loadElements();
});