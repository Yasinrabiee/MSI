const btn = $(`.header__icon i`);

$(`.header__icon`).click(function() {
	if(btn.hasClass(`fa fa-bars`)) {
		$(`.nav__menu`).css(`left`,`0`);
		btn.removeClass(`fa fa-bars`).addClass(`fa fa-times`);
	} else {
		$(`.nav__menu`).css(`left`,`-255px`);
		btn.removeClass(`fa fa-times`).addClass(`fa fa-bars`);
	}
});