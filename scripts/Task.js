class Task {
    // properties
    id = null;
    title = "";
    status = null;
    deleted = null;

    // constructor
    constructor({ id, title, status, deleted }) {
        this.id = id || new Date().getTime();
        this.title = title;
        this.status = status || 'pending';
        this.deleted = deleted || false;
    }

    // methods
    toggleStatus(status) {
        if (this.status == "completed") {
            this.status = "pending";
        } else {
            this.status = "completed";
        }
    }

    complete() {
        this.status = "complete";
    }

    pending() {
        this.status = "pending";
    }

    delete() {
        this.deleted = true;
    }

    toggleDelete() {
        if (this.deleted === true) {
            this.deleted = false;
        } else {
            this.deleted = true;
        }
    }
}