export const formData = [
    {
        id: "project_type",
        label: "Project Type",
        type: "select",
        validationType: "string",
        value: "",
        grid: 6,
        options: [
            {
                id: 'Regional',
                name: 'Regional'
            },
            {
                id: 'National',
                name: 'National'
            },
        ],
        required: true,
    },
    {
        id: "description",
        label: "Descriptions",
        placeholder: "Descriptions",
        type: "wysiwyg",
        validationType: "string",
        grid: 12,
        value: "",
        required: true,
    },
    {
        id: "year",
        label: "Year",
        type: "datepicker",
        validationType: "date",
        value: "",
        grid: 6,
        required: true,
        dateType: 'year'
    },
];
 