import { makeAutoObservable } from 'mobx';

class modals {
    addModal = false;
    editModal = false;

    constructor() {
        makeAutoObservable(this);
    }

    addModalOpen() {
        this.addModal = !this.addModal;
    }

    editModalOpen() {
        this.editModal = !this.editModal;
    }
}

export default new modals();
