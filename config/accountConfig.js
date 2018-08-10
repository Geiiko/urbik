AccountsTemplates.addFields([
{
    _id: 'firstName',
    type: 'text',
    displayName: 'First Name',
    placeholder: 'Your First Name',
    required: true,
},
{
    _id: 'lastName',
    type: 'text',
    displayName: 'Last Name',
    placeholder: 'Your Last Name',
    required: true,
},
{
    _id: 'address',
    type: 'text',
    displayName: "Address",
    placeholder: "Your postal address",
    required: true,
},
{
    _id: 'gender',
    type: 'select',
    displayName: "Gender",
    select: [
      {
        text: "Male",
        value: "male",
      },
      {
        text: "Female",
        value: "female",
      },
    ],
    required: true,
},
{
    _id: 'birthday',
    type: 'text',
    template: "dateInput",
    required: true,
},
{
    _id: 'country',
    type: 'text',
    template: "countryInput",
    required: true,
},
{
    _id: 'job',
    type: 'select',
    displayName: "Your job",
    select: [
      {
        text: "Cadre",
        value: "cadre",
      },
      {
        text: "Fonction publique",
        value: "fonction publique",
      },
      {
        text: "Sans emploi",
        value: "jobless",
      },
    ],
    required: true,
},
]);
