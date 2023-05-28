import * as dotenv from 'dotenv';
dotenv.config();

const defaultSchema = {
  deleted_at: {
    type: Date,
  },
  provider_id: {
    type: String,
    required: true,
  },
  owner_id: {
    type: String,
    required: true,
  },
  pet_id: {
    type: String,
    required: true,
  },
};
export const form = {
  chief_complaints: {
    name: 'Chief Complaints',
    slug: 'chief_complaints',
    has_list: false,
    value: [
      [
        {
          type: 'date',
          format: 'YYYY-MM-DD',
          slug: 'date',
          label: 'Date',
          icon: 'calendar-blank-outline',
          placeholder: 'YYYY / MM / DD',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'time',
          format: 'HH:mm',
          slug: 'time',
          label: 'Time',
          icon: 'clock-outline',
          placeholder: 'HH:MM',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
      ],
      {
        type: 'text',
        slug: 'title',
        label: 'Chief Complaint',
        placeholder: 'Complaint Title',
      },
      {
        type: 'text',
        slug: 'description',
        placeholder: 'Details you think is important for us to know',
      },
      {
        type: 'file',
        slug: 'attachments',
        label: 'Attachment',
        extensions: ['pdf', 'doc', 'png', 'jpg'],
      },
    ],
    schema: {
      date: Date,
      time: String,
      title: String,
      description: String,
      attachments: [
        { file_path: String, file_name: String, s3_signed_url: String },
      ],
      ...defaultSchema,
    },
  },
  deworming: {
    name: 'Deworming',
    slug: 'deworming',
    has_list: false,
    value: [
      [
        {
          type: 'date',
          format: 'YYYY-MM-DD',
          slug: 'date',
          label: 'Date',
          icon: 'calendar-blank-outline',
          placeholder: 'YYYY / MM / DD',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'time',
          format: 'HH:mm',
          slug: 'time',
          label: 'Time',
          icon: 'clock-outline',
          placeholder: 'HH:MM',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
      ],
      {
        type: 'date',
        format: 'YYYY-MM-DD HH:mm:ss',
        slug: 'next_deworming_date',
        label: 'Next Deworming Date',
        icon: 'calendar-blank-outline',
        placeholder: 'YYYY / MM / DD HH:MM:SS',
        default_action: 'add',
        default_value: 45,
        default_unit: 'days',
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
      },
    ],
    schema: {
      date: Date,
      time: String,
      next_deworming_date: Date,
      ...defaultSchema,
    },
  },
  vaccination: {
    name: 'Vaccination',
    slug: 'vaccination',
    has_list: false,
    value: [
      [
        {
          type: 'date',
          format: 'YYYY-MM-DD',
          slug: 'date',
          label: 'Date',
          icon: 'calendar-blank-outline',
          placeholder: 'YYYY / MM / DD',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'time',
          format: 'HH:mm',
          slug: 'time',
          label: 'Time',
          icon: 'clock-outline',
          placeholder: 'HH:MM',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
      ],
      {
        type: 'select',
        slug: 'type',
        label: 'Type',
        placeholder: 'Select',
        options: [
          {
            label: 'Anti-Rabies',
            value: 'anti-rabies',
          },
          {
            label: '9 in 1 / 8 in 1',
            value: '9-in-1-8-in-1',
          },
        ],
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
      },
      {
        type: 'select',
        slug: 'vaccination',
        label: 'Vaccination',
        placeholder: 'Select',
        option_source: 'url',
        option_url: `${process.env.TELEVET_API_URL}/masters/vaccination`,
        option_slug: 'slug',
        option_label: 'name',
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
      },
    ],
    schema: {
      date: Date,
      time: String,
      type: String,
      vaccination: String,
      ...defaultSchema,
    },
  },
  exams: {
    name: 'Exams',
    slug: 'exams',
    has_list: true,
    value: {
      general: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          options: [
            {
              slug: 'appearance',
              label: 'Appearance',
            },
            {
              slug: 'behaviour',
              label: 'Behaviour',
            },
            {
              slug: 'posture',
              label: 'Posture',
            },
          ],
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      mentation: [
        {
          type: 'checkbox', // multiselect
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/mentation`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      posture_and_gait: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/posture-and-gait`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      hydration_status: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/hydration-status`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      coat_and_skin: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/coat-and-skin`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      eyes: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/eyes`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      ears: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/ears`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      nose_and_throat: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/nose-and-throat`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      oral_cavity: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/oral-cavity`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      nervous_system: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/nervous-system`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      gastrointestinal_system: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/gastrointestinal-system`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      rectal_examination: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/rectal-examination`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      genital_system: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/genital-system`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      urinary_system: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/urinary-system`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      heart: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/heart`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      lungs: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/lungs`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
      abdomen: [
        {
          type: 'checkbox',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/abdomen`,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
        },
      ],
    },
    schema: {
      abnormal_symptoms: [String],
      notes: String,
      type: String,
      ...defaultSchema,
    },
  },
  notes: {
    name: 'Notes',
    slug: 'notes',
    has_list: false,
    value: [
      {
        type: 'text',
        slug: 'title',
        label: 'Notes Title',
        placeholder: 'Notes Title',
      },
      {
        type: 'text',
        slug: 'description',
        label: 'Notes Description',
        placeholder: 'Notes description',
      },
    ],
    schema: {
      title: String,
      description: String,
      ...defaultSchema,
    },
  },
  allergies: {
    name: 'Allergies',
    slug: 'allergies',
    has_list: false,
    value: [
      [
        {
          type: 'date',
          format: 'YYYY-MM-DD',
          slug: 'date',
          label: 'Date',
          icon: 'calendar-blank-outline',
          placeholder: 'YYYY / MM / DD',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'time',
          format: 'HH:mm',
          slug: 'time',
          label: 'Time',
          icon: 'clock-outline',
          placeholder: 'HH:MM',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
      ],
      {
        type: 'select',
        slug: 'name_of_the_allergen',
        label: 'Name of the Allergen',
        placeholder: 'Select',
        options: [
          {
            label: 'Rashes on the Skin',
            value: 'rashes on the skin',
          },
        ],
      },
      {
        type: 'file',
        slug: 'attachment',
        label: 'Attachment',
        extensions: ['pdf', 'doc', 'png', 'jpg'],
      },
      {
        type: 'checkbox',
        slug: 'symptoms',
        label: 'Symptoms',
        options: [
          {
            slug: 'itching',
            label: 'Itching',
          },
          {
            slug: 'bleeding',
            label: 'Bleeding',
          },
        ],
      },
      {
        type: 'text',
        slug: 'notes',
        label: 'Notes',
        placeholder: 'Add notes',
      },
    ],
    schema: {
      date: Date,
      time: String,
      name_of_the_allergen: String,
      attachment: [
        { file_path: String, file_name: String, s3_signed_url: String },
      ],
      symptoms: [String],
      notes: String,
      ...defaultSchema,
    },
  },
  labs: {
    name: 'Labs',
    slug: 'labs',
    has_list: false,
    value: [
      [
        {
          type: 'date',
          format: 'YYYY-MM-DD',
          slug: 'date',
          label: 'Date',
          icon: 'calendar-blank-outline',
          placeholder: 'YYYY / MM / DD',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'time',
          format: 'HH:mm',
          slug: 'time',
          label: 'Time',
          icon: 'clock-outline',
          placeholder: 'HH:MM',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
      ],
      {
        type: 'text',
        slug: 'name',
        label: 'Test Name',
        placeholder: 'Enter test name',
      },
      {
        type: 'file',
        slug: 'attachment',
        label: 'Attachment',
        extensions: ['pdf', 'doc', 'png', 'jpg'],
      },
    ],
    schema: {
      date: Date,
      time: String,
      name: String,
      attachment: [
        { file_path: String, file_name: String, s3_signed_url: String },
      ],
      ...defaultSchema,
    },
  },
  radiology: {
    name: 'Radiology',
    slug: 'radiology',
    has_list: false,
    value: [
      [
        {
          type: 'date',
          format: 'YYYY-MM-DD',
          slug: 'date',
          label: 'Date',
          icon: 'calendar-blank-outline',
          placeholder: 'YYYY / MM / DD',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'time',
          format: 'HH:mm',
          slug: 'time',
          label: 'Time',
          icon: 'clock-outline',
          placeholder: 'HH:MM',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
      ],
      {
        type: 'text',
        slug: 'imaging_name',
        label: 'Imaging Name',
        placeholder: 'CT, MRI, X Ray, Ultrasound..',
      },
      {
        type: 'file',
        slug: 'attachment',
        label: 'Attachment',
        extensions: ['pdf', 'doc', 'png', 'jpg'],
      },
    ],
    schema: {
      date: Date,
      time: String,
      imaging_name: String,
      attachment: [
        { file_path: String, file_name: String, s3_signed_url: String },
      ],
      ...defaultSchema,
    },
  },
  treatments: {
    name: 'Treatments',
    slug: 'treatments',
    has_list: false,
    value: [
      [
        {
          type: 'date',
          format: 'YYYY-MM-DD',
          slug: 'date',
          label: 'Date',
          icon: 'calendar-blank-outline',
          placeholder: 'YYYY / MM / DD',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'time',
          format: 'HH:mm',
          slug: 'time',
          label: 'Time',
          icon: 'clock-outline',
          placeholder: 'HH:MM',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
      ],
      {
        type: 'text',
        slug: 'treatment_name',
        label: 'Treatment Name',
        placeholder: 'Treatment',
      },
      {
        type: 'text',
        slug: 'notes',
        label: 'Notes',
        placeholder: 'Add notes',
      },
    ],
    schema: {
      date: Date,
      time: String,
      treatment_name: String,
      notes: String,
      ...defaultSchema,
    },
  },
  medications: {
    name: 'Medications',
    slug: 'medications',
    has_list: false,
    value: [
      [
        {
          type: 'date',
          format: 'YYYY-MM-DD',
          slug: 'date',
          label: 'Date',
          icon: 'calendar-blank-outline',
          placeholder: 'YYYY / MM / DD',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
        {
          type: 'time',
          format: 'HH:mm',
          slug: 'time',
          label: 'Time',
          icon: 'clock-outline',
          placeholder: 'HH:MM',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
          ],
        },
      ],
      {
        type: 'text',
        slug: 'medication_name',
        label: 'Medication Name',
        placeholder: 'Enter Medication Name',
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
      },
      {
        type: 'select',
        slug: 'dose_and_strength',
        label: 'Dose & Strength',
        placeholder: 'Select',
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
        options: [
          {
            label: '',
            value: '',
          },
        ],
      },
      {
        type: 'select',
        slug: 'route',
        label: 'Route',
        placeholder: 'Select',
        options: [
          {
            label: '',
            value: '',
          },
        ],
      },
      {
        type: 'select',
        slug: 'administration',
        label: 'Administration',
        placeholder: 'Select',
        options: [
          {
            label: '',
            value: '',
          },
        ],
      },
      {
        type: 'select',
        slug: 'frequency',
        label: 'Frequency',
        placeholder: 'Select',
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
        options: [
          {
            label: '',
            value: '',
          },
        ],
      },
      {
        type: 'select',
        slug: 'no_of_days',
        label: 'No Of Days',
        placeholder: 'Select',
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
        options: [
          {
            label: '',
            value: '',
          },
        ],
      },
      {
        type: 'select',
        slug: 'reason_for_medication',
        label: 'Reason For Medication',
        placeholder: 'Select',
        options: [
          {
            label: '',
            value: '',
          },
        ],
      },
    ],
    schema: {
      date: Date,
      time: String,
      medication_name: String,
      dose_and_strength: String,
      route: String,
      administration: String,
      frequency: String,
      no_of_days: String,
      reason_for_medication: String,
      ...defaultSchema,
    },
  },
  vitals: {
    name: 'Vitals',
    slug: 'vitals',
    has_list: true,
    value: {
      temperature: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'radio',
          slug: 'type',
          label: 'Type',
          options: [
            {
              label: 'Oral',
              value: 'oral',
            },
            {
              label: 'Rectal',
              value: 'rectal',
            },
          ],
        },
        {
          type: 'radio',
          slug: 'mode',
          label: 'Mode',
          options: [
            {
              label: 'Fahrenheit',
              value: 'fahrenheit',
            },
            {
              label: 'Celsius',
              value: 'celsius',
            },
          ],
        },
        {
          type: 'slider',
          slug: 'value',
          label: 'Value',
          min: 0,
          max: 200,
        },
        {
          type: 'radio',
          slug: 'status',
          label: 'Status',
          options: [
            {
              label: 'Low',
              value: 'low',
            },
            {
              label: 'Normal',
              value: 'normal',
            },
            {
              label: 'Elevated',
              value: 'elevated',
            },
            {
              label: 'High',
              value: 'high',
            },
          ],
        },
      ],
      heart_rate: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'slider',
          slug: 'bpm',
          label: 'Beats Per Minute',
          min: 0,
          max: 500,
        },
        {
          type: 'radio',
          slug: 'status',
          label: 'Status',
          options: [
            {
              label: 'Low',
              value: 'low',
            },
            {
              label: 'Normal',
              value: 'normal',
            },
            {
              label: 'Elevated',
              value: 'elevated',
            },
            {
              label: 'High',
              value: 'high',
            },
          ],
        },
      ],
      respiratory_rate: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'slider',
          slug: 'bpm',
          label: 'Breaths Per Minute',
          min: 0,
          max: 100,
        },
        {
          type: 'radio',
          slug: 'status',
          label: 'Status',
          options: [
            {
              label: 'Low',
              value: 'low',
            },
            {
              label: 'Normal',
              value: 'normal',
            },
            {
              label: 'Elevated',
              value: 'elevated',
            },
            {
              label: 'High',
              value: 'high',
            },
          ],
        },
      ],
      mucous_membrane: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'select',
          slug: 'color',
          label: 'Color',
          options: [
            {
              label: 'Pale',
              value: 'pale',
            },
            {
              label: 'Pink',
              value: 'pink',
            },
            {
              label: 'White',
              value: 'white',
            },
            {
              label: 'Inflamed',
              value: 'inflamed',
            },
          ],
        },
        {
          type: 'toggle',
          slug: 'icterus',
          label: 'Icterus',
          options: [
            {
              label: 'Yes',
              value: 'yes',
            },
            {
              label: 'No',
              value: 'no',
            },
          ],
        },
      ],
      height: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'text',
          format: 'number',
          slug: 'height',
          label: 'Height in cm',
          placeholder: 'Enter height',
        },
        {
          type: 'radio',
          slug: 'status',
          label: 'Status',
          options: [
            {
              label: 'Low',
              value: 'low',
            },
            {
              label: 'Normal',
              value: 'normal',
            },
            {
              label: 'Elevated',
              value: 'elevated',
            },
            {
              label: 'High',
              value: 'high',
            },
          ],
        },
      ],
      weight: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'text',
          format: 'number',
          slug: 'weight',
          label: 'Weight in kg',
          placeholder: 'Enter weight',
        },
        {
          type: 'radio',
          slug: 'status',
          label: 'Status',
          options: [
            {
              label: 'Low',
              value: 'low',
            },
            {
              label: 'Normal',
              value: 'normal',
            },
            {
              label: 'Elevated',
              value: 'elevated',
            },
            {
              label: 'High',
              value: 'high',
            },
          ],
        },
      ],
      blood_pressure: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'text',
          format: 'number',
          slug: 'systolic',
          label: 'Systolic',
          placeholder: 'Enter systolic',
        },
        {
          type: 'text',
          format: 'number',
          slug: 'diastolic',
          label: 'Diastolic',
          placeholder: 'Enter diastolic',
        },
        {
          type: 'text',
          format: 'number',
          slug: 'pulse',
          label: 'Pulse',
          placeholder: 'Enter pulse',
        },
        {
          type: 'radio',
          slug: 'status',
          label: 'Status',
          options: [
            {
              label: 'Low',
              value: 'low',
            },
            {
              label: 'Normal',
              value: 'normal',
            },
            {
              label: 'Elevated',
              value: 'elevated',
            },
            {
              label: 'High',
              value: 'high',
            },
          ],
        },
      ],
    },
    schema: {
      date: Date,
      time: String,
      type: String,
      mode: String,
      value: Number,
      status: String,
      bpm: Number,
      color: String,
      icterus: String,
      height: Number,
      weight: Number,
      systolic: Number,
      diastolic: Number,
      pulse: Number,
      ...defaultSchema,
    },
  },
  history: {
    name: 'History',
    slug: 'history',
    has_list: true,
    value: {
      medical: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'select',
          slug: 'condition',
          label: 'Condition',
          placeholder: 'Select',
          options: [
            {
              label: 'Condition 1', // need to check
              value: 'condition_1',
            },
            {
              label: 'Condition 2',
              value: 'condition_2',
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes..',
        },
      ],
      surgical: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'select',
          slug: 'procedure_names',
          label: 'Procedure Names',
          placeholder: 'Select',
          options: [
            {
              label: 'Procedure 1', // need to check
              value: 'procedure_1',
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes..',
        },
      ],
      estrus: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'text',
          slug: 'no_of_cycles',
          label: 'No of Cycles',
          placeholder: 'Enter estrus cycle',
        },
        {
          type: 'select',
          slug: 'pregnancy_type',
          label: 'Pregnancy Type & Labor',
          placeholder: 'Select',
          options: [
            {
              label: 'Normal',
              value: 'normal',
            },
            {
              label: 'C-Section',
              value: 'c_section',
            },
            {
              label: 'Miscarriage',
              value: 'miscarriage',
            },
          ],
        },
        {
          type: 'select',
          slug: 'previous_litters_status',
          label: 'Previous Litters Status',
          placeholder: 'Select',
          options: [
            {
              label: 'All Alive',
              value: 'all_alive',
            },
            {
              label: 'Partially Survived',
              value: 'partially_survived',
            },
            {
              label: 'Preterm',
              value: 'preterm',
            },
            {
              label: 'All Expired',
              value: 'all_expired',
            },
          ],
        },
        {
          type: 'toggle',
          slug: 'sudo_pregnancy',
          label: 'Sudo Pregnancy',
          options: [
            {
              label: 'Yes',
              value: 'yes',
            },
            {
              label: 'No',
              value: 'no',
            },
          ],
        },
      ],
      dermal: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'select',
          slug: 'condition',
          label: 'Condition',
          placeholder: 'Select',
          options: [
            {
              label: 'Condition 1',
              value: 'condition_1', // need to check
            },
          ],
        },
        {
          type: 'file',
          slug: 'attachment',
          label: 'Attachment',
          extensions: ['pdf', 'doc', 'png', 'jpg'],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes..',
        },
      ],
      diet: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'text',
          slug: 'staple',
          label: 'Staple',
          placeholder: 'Add notes..',
        },
        {
          type: 'text',
          slug: 'table_food',
          label: 'Table Food',
          placeholder: 'Add notes..',
        },
        {
          type: 'text',
          slug: 'treats',
          label: 'Treats',
          placeholder: 'Add notes..',
        },
      ],
      grooming: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'radio',
          slug: 'grooming',
          label: 'Grooming',
          options: [
            {
              label: 'Well Groomed',
              value: 'well_groomed',
            },
            {
              label: 'Poorly Groomed',
              value: 'poorly_groomed',
            },
          ],
        },
      ],
      breeder: [
        [
          {
            type: 'date',
            format: 'YYYY-MM-DD',
            slug: 'date',
            label: 'Date',
            icon: 'calendar-blank-outline',
            placeholder: 'YYYY / MM / DD',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
          {
            type: 'time',
            format: 'HH:mm',
            slug: 'time',
            label: 'Time',
            icon: 'clock-outline',
            placeholder: 'HH:MM',
            validationRules: [
              {
                rule: 'required',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'text',
          slug: 'name',
          label: 'Name',
          placeholder: 'Enter name',
        },
        {
          type: 'text',
          slug: 'remarks',
          label: 'Remarks',
          placeholder: 'Add remarks..',
        },
      ],
      behavior: [],
      steroid: [],
    },
    schema: {
      date: Date,
      time: String,
      condition: String,
      notes: String,
      procedure_names: String,
      no_of_cycles: Number,
      pregnancy_type: String,
      previous_litters_status: String,
      sudo_pregnancy: String,
      staple: String,
      table_food: String,
      treats: String,
      grooming: String,
      breeder: String,
      name: String,
      remarks: String,
      ...defaultSchema,
    },
  },
  appointment: {
    name: 'Appointment',
    slug: 'appointment',
    has_list: false,
    value: [
      {
        type: 'select',
        slug: 'provider_id',
        label: 'Choose Doctor',
        placeholder: 'Select',
        option_source: 'url',
        option_url: `${process.env.TELEVET_API_URL}/providers`,
        option_method: 'GET',
        option_token_type: 'Bearer',
        option_label: 'user.first_name',
        option_slug: 'id',
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
      },
      {
        type: 'radio',
        slug: 'type',
        label: 'Type',
        option_default: 'teleconsult',
        options: [
          {
            label: 'TeleConsult',
            value: 'teleconsult',
          },
          {
            label: 'Walkin',
            value: 'walkin',
          },
        ],
      },
      {
        type: 'slots',
        slug: 'slots',
        range: 7,
        range_unit: 'days',
      },
      {
        type: 'text',
        slug: 'reason',
        label: 'Reason for Consult',
        placeholder: 'Describe',
      },
    ],
  },
};
