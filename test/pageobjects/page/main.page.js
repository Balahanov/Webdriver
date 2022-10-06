import Page from "./page";

class MainPage extends Page {
    title = () => $('.main-header');
    defaultDescription = () => $('.playgound-body').$('.col-md-6');
    menuDropdown(title) {
        return $('.left-pannel')/* .$('.header-text') */.$(`div=${title}`);
    }
    menuItem(title) {
        return $('[class="element-list collapse show"]').$(`.text=${title}`);
    }

    open(title) {
        return super.open(title);
    };
    checkDropdownIsOpened(title) {
        const el = this.menuDropdown(title).parentElement().parentElement().parentElement();
        return expect(el.$('.element-list')).toHaveElementClass('show');
    }
}

export {MainPage}