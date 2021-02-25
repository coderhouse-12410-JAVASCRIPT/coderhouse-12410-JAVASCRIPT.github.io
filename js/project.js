/**
 * Project class.
 *
 * @constructor
 * @param {JSON} json_data - Requieres JSON data for instace object.
 */
class Project extends HTMLElement {
    constructor(json_data) {
        super();
        // constructor syntactic sugar
        this.title = json_data.project_title;
        this.folder = json_data.folder;
        this.student = json_data.student;
        this.preview = json_data.img_preview_src;
        this.date = json_data.date;
        this.contact = json_data.contact;
        this._createComponent();
    }

    _createComponent() {
        let button = $('<button/>', {
            text: 'Fancy button!'
        });
        
        let div_img = $('<div/>', {
            "class": "image-box image-box--shadowed white-bg style-2 mb-4"
        }); 

        let div_overlay = $('<div/>', {
            "class": "overlay-container"
        });

        let img_prj = $('<img/>', {
            "src": this.preview,
            "alt": ''
        });

        let a_img = $('<a/>', {
            "class": "overlay-link",
            "href": '#'
        });

        let div_body = $('<div/>', {
            "class": "body"
        });

        let h5_title = $('<h5/>', {
            "class": "font-weight-bold my-2",
            "text": this.title
        });

        let p_date = $('<p/>', {
            "class": "small",
            "text": this.date
        });

        let div_row_flex = $('<div/>', {
            "class": "row d-flex align-items-center"
        });

        let div_col_6 =  $('<div/>', {
            "class": "col-6"
        });

        img_prj.appendTo(div_overlay)

        a_img.appendTo(div_overlay)

        div_overlay.appendTo(div_img);

        h5_title.appendTo(div_body)

        p_date.appendTo(div_body)

        div_row_flex.appendTo(div_body)

        div_col_6.appendTo(div_body)
        
        // Orden de componentes
        div_body.appendTo(div_img)

        button.appendTo(div_img)

        $(this).append(div_img);
        $(this).addClass("col-md-6 col-xl-4");
    }
}

customElements.define('div-prj', Project);