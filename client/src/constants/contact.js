const formInputs = [
  { id: 'name', type: 'text', placeholder: 'Your name', isRequired: true },
  { id: 'email', type: 'email', placeholder: 'Your email', isRequired: true },
  { id: 'phone', type: 'tel', placeholder: 'Your phone', isRequired: false },
  { id: 'subject', type: 'text', placeholder: 'Subject', isRequired: true },
  { id: 'referral', type: 'text', placeholder: 'Who sent you our way?', isRequired: false }, 
];

const serviceOptions = [
  { value: 'photography', label: 'Photography' },
  { value: 'videography', label: 'Videography' },
  { value: 'contentCreation', label: 'Content Creation' },
  { value: 'other', label: 'Other' }
];

const serviceLabels = Object.fromEntries(
  serviceOptions.map(option => [option.value, option.label])
);

export default {
  formInputs,
  serviceOptions,
  serviceLabels,
};