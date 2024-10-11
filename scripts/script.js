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

const lazyLoadingElements = $(`.lazy-loading`);

function loadElements() {
	lazyLoadingElements.each(function() {
		const element = $(this);
		if(element.offset().top < $(window).scrollTop() + $(window).height())
			element.addClass(`loaded`);
	});
}

loadElements();

$(window).on(`scroll`, function() {
	loadElements();
});


function filterSeries() {
	const select = document.querySelector(`#sort-select`);
	const selectedCategory = select.value;
	const seriesItems = document.querySelectorAll(`.series`);
	seriesItems.forEach(item => {
		if(selectedCategory === `all` || item.getAttribute(`data-category`) === selectedCategory) {
			item.style.display = `block`;
		}
		else {
			item.style.display = `none`;
		}
	});
}

document.querySelector(`#sort-select`).addEventListener(`change`, function() {
	filterSeries();
});

$(`.header__btn, .menu__item`).click(function() {
	menu.toggleClass(`active`)
	$(`.nav__menu`).css(`right`,`-300px`);
	$(`.header__icon svg:first-child`).css(`display`, `block`);
	$(`.header__icon svg:last-child`).css(`display`, `none`);
	$(`html, body`).animate({
		scrollTop: $(`.news-wrapper`).offset().top
	},1500);
});	