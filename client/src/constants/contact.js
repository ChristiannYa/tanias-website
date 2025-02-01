const formInputs = [
  { id: 'name', type: 'text', placeholder: 'Name', isRequired: true },
  { id: 'email', type: 'email', placeholder: 'Email', isRequired: true },
  { id: 'phone', type: 'tel', placeholder: 'Phone', isRequired: false },
  { id: 'title', type: 'text', placeholder: 'Title', isRequired: true },
  {
    id: 'referral',
    type: 'text',
    placeholder: 'how did you hear about us?',
    isRequired: false,
  },
];

const serviceOptions = [
  { value: 'photography', label: 'Photography' },
  { value: 'videoCoverage', label: 'Video coverage' },
  { value: 'contentCreation', label: 'Content Creation' },
  { value: 'photographyWorkshop', label: 'Photography Workshop' },
  { value: 'other', label: 'Other' },
];

const serviceLabels = Object.fromEntries(
  serviceOptions.map(option => [option.value, option.label])
);

export default {
  formInputs,
  serviceOptions,
  serviceLabels,
};