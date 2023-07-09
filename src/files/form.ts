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
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
          {
            rule: 'string',
            args: [],
          },
        ],
      },
      {
        type: 'text',
        slug: 'description',
        placeholder: 'Details you think is important for us to know',
        validationRules: [
          {
            rule: 'string',
            args: [],
          },
        ],
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
      title: String,
      description: String,
      attachment: [
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
      },
    ],
    schema: {
      date: Date,
      time: String,
      last_deworming_date: Date,
      next_deworming_date: Date,
      status: String,
      dewormings: [
        { date: Date, time: String, next_deworming_date: Date, status: String },
      ],
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
        slug: 'vaccine_type',
        label: 'Vaccine Type',
        placeholder: 'Select Type',
        options: [
          {
            label: 'Anti-Rabies',
            value: 'anti_rabies',
            dose: 2,
            interval: [15, 365],
          },
          {
            label: '9 in 1',
            value: '9_in_1',
            dose: 1,
            interval: 365,
          },
          {
            label: '8 in 1',
            value: '8_in_1',
            dose: 1,
            interval: 365,
          },
          {
            label: '5 in 1',
            value: '5_in_1',
            dose: 1,
            interval: 365,
          },
          {
            label: 'Distemper',
            value: 'distemper',
            dose: 1,
            interval: 365,
          },
          {
            label: 'Parvovirus',
            value: 'parvovirus',
            dose: 1,
            interval: 365,
          },
          {
            label: 'Adenovirus/Hepatitis',
            value: 'adenovirus_or_hepatitis',
            dose: 1,
            interval: 365,
          },
          {
            label: 'DA2PPV',
            value: 'da2ppv',
            dose: 1,
            interval: 365,
          },
          {
            label: 'Bordetella',
            value: 'bordetella',
            dose: 1,
            interval: 365,
          },
          {
            label: 'Canine Influenza (dog {flu influenza})',
            value: 'canine_influenza_dog_flu_influenza',
            dose: 1,
            interval: 365,
          },
          {
            label: 'Leptospirosis',
            value: 'leptospirosis',
            dose: 1,
            interval: 365,
          },
          {
            label: 'Lyme vaccine',
            value: 'lyme_vaccine',
            dose: 1,
            interval: 365,
          },
        ],
        custom: true,
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
          {
            rule: 'object',
            args: [],
          },
        ],
      },
      // {
      //   type: 'select',
      //   slug: 'vaccination',
      //   label: 'Vaccination',
      //   placeholder: 'Select',
      //   option_source: 'url',
      //   option_url: `${process.env.TELEVET_API_URL}/masters/vaccination`,
      //   option_slug: 'slug',
      //   option_label: 'name',
      //   validationRules: [
      //     {
      //       rule: 'required',
      //       args: [],
      //     },
      //   ],
      // },
      {
        type: 'radio',
        slug: 'dose',
        label: 'Dose',
        options: [
          {
            label: 'Dose 1',
            value: 'dose_1',
          },
          {
            label: 'Dose 2',
            value: 'dose_2',
            conditional: true,
            conditional_slug: 'type',
            conditional_value: 'anti_rabies',
            next_dose_date_value: 15,
            next_dose_date_unit: 'days',
          },
          {
            label: 'Booster',
            value: 'booster',
          },
        ],
        validationRules: [
          {
            rule: 'string',
            args: [],
          },
        ],
      },
      {
        type: 'text',
        slug: 'notes',
        label: 'Notes',
        placeholder: 'Notes...',
        validationRules: [
          {
            rule: 'string',
            args: [],
          },
        ],
      },
      {
        type: 'file',
        slug: 'attachment',
        label: 'Attachment',
        extensions: ['pdf', 'doc', 'png', 'jpg'],
        validationRules: [
          {
            rule: 'array',
            args: [],
          },
          {
            rule: 'of',
            args: ['object'],
          },
        ],
      },
    ],
    schema: {
      date: Date,
      time: String,
      vaccine_type: { label: String, value: String },
      vaccination: String,
      dose: String,
      next_dose_date: Date,
      notes: String,
      doses: [{ date: Date, dose: String }],
      attachment: [
        { file_path: String, file_name: String, s3_signed_url: String },
      ],
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
          type: 'picker',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          multi: true,
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
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
      ],
      mentation: [
        {
          type: 'picker', // multiselect
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/mentation`,
          multi: true,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
      ],
      posture_and_gait: [
        {
          type: 'picker',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/posture-and-gait`,
          multi: true,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
      ],
      hydration_status: [
        {
          type: 'picker',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/hydration-status`,
          multi: true,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
      ],
      coat_and_skin: [
        {
          type: 'picker',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/coat-and-skin`,
          multi: true,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
      ],
      eyes: [
        {
          type: 'picker',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/eyes`,
          multi: true,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
      ],
      ears: [
        {
          type: 'picker',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/ears`,
          multi: true,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
      ],
      nose_and_throat: [
        {
          type: 'picker',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/nose-and-throat`,
          multi: true,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
      ],
      oral_cavity: [
        {
          type: 'picker',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/oral-cavity`,
          multi: true,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
      ],
      nervous_system: [
        {
          type: 'picker',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/nervous-system`,
          multi: true,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
      ],
      gastrointestinal_system: [
        {
          type: 'picker',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/gastrointestinal-system`,
          multi: true,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
      ],
      rectal_examination: [
        {
          type: 'picker',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/rectal-examination`,
          multi: true,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
      ],
      genital_system: [
        {
          type: 'picker',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/genital-system`,
          multi: true,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
      ],
      urinary_system: [
        {
          type: 'picker',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/urinary-system`,
          multi: true,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
      ],
      heart: [
        {
          type: 'picker',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/heart`,
          multi: true,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
      ],
      lungs: [
        {
          type: 'picker',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/lungs`,
          multi: true,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
      ],
      abdomen: [
        {
          type: 'picker',
          slug: 'abnormal_symptoms',
          label: 'Abnormal Symptom(s)',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/abnormality/abdomen`,
          multi: true,
          option_slug: 'slug',
          option_label: 'name',
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
      ],
    },
    schema: {
      abnormal_symptoms: [{ label: String, value: String }],
      notes: String,
      type: String,
      form_type: String,
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
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
          {
            rule: 'string',
            args: [],
          },
        ],
      },
      {
        type: 'text',
        slug: 'description',
        label: 'Notes Description',
        placeholder: 'Notes description',
        validationRules: [
          {
            rule: 'string',
            args: [],
          },
        ],
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
        type: 'toggle',
        slug: 'rashes_on_the_skin',
        label: 'Rashes on the Skin',
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
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
          {
            rule: 'string',
            args: [],
          },
        ],
      },
      {
        type: 'select',
        slug: 'cause_of_allergy',
        label: 'Cause of Allergy',
        placeholder: 'Select',
        options: [
          {
            label: 'Medication',
            value: 'medication',
          },
          {
            label: 'Environmental',
            value: 'environmental',
          },
          {
            label: 'Food',
            value: 'food',
          },
          {
            label: 'Shampoo/Products',
            value: 'shampoo_or_products',
          },
          {
            label: 'Parasites',
            value: 'parasites',
          },
          {
            label: 'Accessories',
            value: 'accessories',
          },
          {
            label: 'Seasonal',
            value: 'seasonal',
          },
          {
            label: 'Unknown',
            value: 'unknown',
          },
        ],
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
          {
            rule: 'object',
            args: [],
          },
        ],
      },
      {
        type: 'select',
        slug: 'severity',
        label: 'Severity',
        placeholder: 'Select',
        options: [
          {
            label: 'Mild',
            value: 'mild',
          },
          {
            label: 'Moderate',
            value: 'moderate',
          },
          {
            label: 'Severe',
            value: 'severe',
          },
          {
            label: 'Requires Hospitalization',
            value: 'requires_hospitalization',
          },
        ],
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
          {
            rule: 'object',
            args: [],
          },
        ],
      },
      {
        type: 'picker',
        slug: 'symptoms',
        label: 'Symptoms',
        placeholder: 'Select',
        multi: true,
        options: [
          {
            label: 'Itching',
            value: 'itching',
          },
          {
            label: 'Rashes',
            value: 'rashes',
          },
          {
            label: 'Hives',
            value: 'hives',
          },
          {
            label: 'Hairloss',
            value: 'hairloss',
          },
          {
            label: 'Watering eyes',
            value: 'watering_eyes',
          },
          {
            label: 'Sneezing',
            value: 'sneezing',
          },
          {
            label: 'Difficulty breathing',
            value: 'difficulty_breathing',
          },
          {
            label: 'Wheezing',
            value: 'wheezing',
          },
          {
            label: 'Retching',
            value: 'retching',
          },
          {
            label: 'Hyperventilation',
            value: 'hyperventilation',
          },
          {
            label: 'Swelling of the face, ears, lips, eyelids, or earflaps',
            value: 'swelling_of_the_face_ears_lips_eyelids_or_earflaps',
          },
          {
            label: 'Red, inflamed skin',
            value: 'red_inflamed_skin',
          },
          {
            label: 'Diarrhea',
            value: 'diarrhea',
          },
          {
            label: 'Vomiting',
            value: 'vomiting',
          },
          {
            label: 'Itchy ears',
            value: 'itchy_ears',
          },
          {
            label: 'Chronic ear infections',
            value: 'chronic_ear_infections',
          },
          {
            label: 'Itchy, runny eyes',
            value: 'itchy_runny_eyes',
          },
          {
            label: 'Constant licking',
            value: 'constant_licking',
          },
        ],
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
          {
            rule: 'array',
            args: [],
          },
          {
            rule: 'of',
            args: ['object'],
          },
        ],
      },
      {
        type: 'select',
        slug: 'treated_by',
        label: 'Treated By',
        placeholder: 'Select',
        options: [
          {
            label: 'Chlorpheniramine',
            value: 'chlorpheniramine',
          },
          {
            label: 'Diphenhydramine',
            value: 'diphenhydramine',
          },
          {
            label: 'Ceterizine',
            value: 'ceterizine',
          },
          {
            label: 'Clemastine',
            value: 'clemastine',
          },
          {
            label: 'Hydroxyzine',
            value: 'hydroxyzine',
          },
          {
            label: 'Amitriptyline',
            value: 'amitriptyline',
          },
          {
            label: 'Cyproheptadine',
            value: 'cyproheptadine',
          },
        ],
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
          {
            rule: 'object',
            args: [],
          },
        ],
      },
      {
        type: 'text',
        slug: 'notes',
        label: 'Notes',
        placeholder: 'Add notes',
        validationRules: [
          {
            rule: 'string',
            args: [],
          },
        ],
      },
      {
        type: 'file',
        slug: 'attachment',
        label: 'Attachment',
        extensions: ['pdf', 'doc', 'png', 'jpg'],
        validationRules: [
          {
            rule: 'array',
            args: [],
          },
          {
            rule: 'of',
            args: ['object'],
          },
        ],
      },
    ],
    schema: {
      date: Date,
      time: String,
      cause_of_allergy: { label: String, value: String },
      rashes_on_the_skin: Boolean,
      severity: { label: String, value: String },
      symptoms: [{ label: String, value: String }],
      treated_by: { label: String, value: String },
      attachment: [
        { file_path: String, file_name: String, s3_signed_url: String },
      ],
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
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
          {
            rule: 'string',
            args: [],
          },
        ],
      },
      {
        type: 'file',
        slug: 'attachment',
        label: 'Attachment',
        extensions: ['pdf', 'doc', 'png', 'jpg'],
        validationRules: [
          {
            rule: 'array',
            args: [],
          },
          {
            rule: 'of',
            args: ['object'],
          },
        ],
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
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
          {
            rule: 'string',
            args: [],
          },
        ],
      },
      {
        type: 'file',
        slug: 'attachment',
        label: 'Attachment',
        extensions: ['pdf', 'doc', 'png', 'jpg'],
        validationRules: [
          {
            rule: 'array',
            args: [],
          },
          {
            rule: 'of',
            args: ['object'],
          },
        ],
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
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
          {
            rule: 'string',
            args: [],
          },
        ],
      },
      {
        type: 'text',
        slug: 'notes',
        label: 'Notes',
        placeholder: 'Add notes',
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
          {
            rule: 'string',
            args: [],
          },
        ],
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
        type: 'picker',
        slug: 'medication_name',
        label: 'Medication Name',
        placeholder: 'Select Medication',
        option_source: 'url',
        option_url: `${process.env.TELEVET_API_URL}/masters/drug`,
        multi: false,
        option_method: 'GET',
        option_label: 'name',
        option_slug: 'slug',
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
          {
            rule: 'object',
            args: [],
          },
        ],
      },
      [
        {
          type: 'text',
          slug: 'dosage',
          label: 'Dosage',
          placeholder: 'Dosage',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
        {
          type: 'select',
          slug: 'unit',
          label: 'Unit',
          placeholder: 'Select',
          options: [
            {
              label: 'Caplet',
              value: 'caplet',
            },
            {
              label: 'Caplet per 20 Pounds',
              value: 'caplet_per_20_pounds',
            },
            {
              label: 'Milligram',
              value: 'milligram',
            },
            {
              label: 'Milligram per Pound',
              value: 'milligram_per_pound',
            },
            {
              label: 'Milligram per 20 Pounds',
              value: 'milligram_per_20_pounds',
            },
            {
              label: 'Millilitre',
              value: 'millilitre',
            },
            {
              label: 'Millilitre per Pound',
              value: 'millilitre_per_pound',
            },
            {
              label: 'Teaspoon',
              value: 'teaspoon',
            },
            {
              label: 'Teaspoon per 5 Pounds',
              value: 'teaspoon_per_5_pounds',
            },
            {
              label: 'Teaspoon per 20 Pounds',
              value: 'teaspoon_per_20_pounds',
            },
            {
              label: 'Tbs',
              value: 'tbs',
            },
          ],
          validationRules: [
            {
              rule: 'object',
              args: [],
            },
          ],
        },
      ],
      {
        type: 'select',
        slug: 'route',
        label: 'Route',
        placeholder: 'Select',
        options: [
          {
            label: 'Oral',
            value: 'oral',
          },
          {
            label: 'Parenteral',
            value: 'parenteral',
          },
          {
            label: 'Topical',
            value: 'topical',
          },
          {
            label: 'Rectal',
            value: 'rectal',
          },
          {
            label: 'Intramammary',
            value: 'intramammary',
          },
        ],
        validationRules: [
          {
            rule: 'object',
            args: [],
          },
        ],
      },
      {
        type: 'picker',
        slug: 'administration',
        label: 'Administration',
        placeholder: 'Select',
        option_url: `${process.env.TELEVET_API_URL}/masters/medication`,
        multi: false,
        custom: true,
        query: 'route',
        option_method: 'GET',
        option_label: 'name',
        option_slug: 'slug',
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
        ],
      },
      {
        type: 'select',
        slug: 'frequency',
        label: 'Frequency',
        placeholder: 'Select',
        options: [
          {
            label: 'Once a Day',
            value: 'once_a_day',
          },
          {
            label: 'Twice a Day',
            value: 'twice_a_day',
          },
          {
            label: 'Four Times a Day',
            value: 'four_times_a_day',
          },
          {
            label: 'Once or Twice a Day',
            value: 'once_or_twice_a_day',
          },
          {
            label: '2 to 3 Times a Day',
            value: '2_to_3_times_a_day',
          },
          {
            label: '3 to 4 Times a Day',
            value: '3_to_4_times_a_day',
          },
          {
            label: '4 to 6 Times a Day',
            value: '4_to_6_times_a_day',
          },
          {
            label: 'More than 6 Times a Day',
            value: 'more_than_6_times_a_day',
          },
        ],
        validationRules: [
          {
            rule: 'object',
            args: [],
          },
        ],
      },
      {
        type: 'text',
        slug: 'no_of_days',
        label: 'No Of Days',
        placeholder: 'No Of Days',
        validationRules: [
          {
            rule: 'string',
            args: [],
          },
        ],
      },
      {
        type: 'text',
        slug: 'reason_for_medication',
        label: 'Reason For Medication',
        placeholder: 'Reason',
        validationRules: [
          {
            rule: 'string',
            args: [],
          },
        ],
      },
    ],
    schema: {
      date: Date,
      time: String,
      medication_name: { label: String, value: String },
      dosage: String,
      unit: { label: String, value: String },
      route: { label: String, value: String },
      administration: { label: String, value: String },
      frequency: { label: String, value: String },
      no_of_days: String,
      reason_for_medication: String,
      status: {
        type: String,
        default: 'active',
      },
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
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'string',
              args: [],
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
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'string',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'value',
          label: 'Value',
          placeholder: 'Value',
          min: 0,
          max: 200,
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'number',
              args: [],
            },
            {
              rule: 'min',
              args: [0],
            },
            {
              rule: 'max',
              args: [200],
            },
          ],
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
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'string',
              args: [],
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
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'number',
              args: [],
            },
            {
              rule: 'min',
              args: [0],
            },
            {
              rule: 'max',
              args: [500],
            },
          ],
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
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'string',
              args: [],
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
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'number',
              args: [],
            },
            {
              rule: 'min',
              args: [0],
            },
            {
              rule: 'max',
              args: [100],
            },
          ],
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
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'string',
              args: [],
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
          placeholder: 'Select a color',
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
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'object',
              args: [],
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
          validationRules: [
            {
              rule: 'required',
              args: [],
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
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'number',
              args: [],
            },
          ],
        },
        // {
        //   type: 'radio',
        //   slug: 'status',
        //   label: 'Status',
        //   options: [
        //     {
        //       label: 'Low',
        //       value: 'low',
        //     },
        //     {
        //       label: 'Normal',
        //       value: 'normal',
        //     },
        //     {
        //       label: 'Elevated',
        //       value: 'elevated',
        //     },
        //     {
        //       label: 'High',
        //       value: 'high',
        //     },
        //   ],
        //   validationRules: [
        //     {
        //       rule: 'required',
        //       args: [],
        //     },
        //   ],
        // },
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
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'number',
              args: [],
            },
          ],
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
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'string',
              args: [],
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
          validationRules: [
            {
              rule: 'number',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          format: 'number',
          slug: 'diastolic',
          label: 'Diastolic',
          placeholder: 'Enter diastolic',
          validationRules: [
            {
              rule: 'number',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          format: 'number',
          slug: 'pulse',
          label: 'Pulse',
          placeholder: 'Enter pulse',
          validationRules: [
            {
              rule: 'number',
              args: [],
            },
          ],
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
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'string',
              args: [],
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
      color: { label: String, value: String },
      icterus: String,
      height: Number,
      weight: Number,
      systolic: Number,
      diastolic: Number,
      pulse: Number,
      form_type: String,
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
          type: 'picker',
          slug: 'condition',
          label: 'Condition',
          placeholder: 'Select',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/disease`,
          multi: true,
          option_method: 'GET',
          option_label: 'name',
          option_slug: 'slug',
          validationRules: [
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes..',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
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
          type: 'picker',
          slug: 'procedure_names',
          label: 'Procedure Names',
          placeholder: 'Select',
          option_source: 'url',
          option_url: `${process.env.TELEVET_API_URL}/masters/surgical-procedure`,
          multi: false,
          option_method: 'GET',
          option_label: 'name',
          option_slug: 'slug',
          validationRules: [
            {
              rule: 'object',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes..',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
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
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
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
          validationRules: [
            {
              rule: 'object',
              args: [],
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
          validationRules: [
            {
              rule: 'object',
              args: [],
            },
          ],
        },
        {
          type: 'toggle',
          slug: 'pseudo_pregnancy',
          label: 'Pseudo Pregnancy',
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
          validationRules: [
            {
              rule: 'required',
              args: [],
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
          type: 'picker',
          slug: 'clinical_sign',
          label: 'Clinical Sign',
          placeholder: 'Select',
          multi: true,
          options: [
            {
              label: 'Scratching/licking/biting at self',
              value: 'scratching_licking_biting_at_self',
            },
            {
              label: 'Hair loss or poor regrowth of hair',
              value: 'hair_loss_or_poor_regrowth_of_hair',
            },
            {
              label: 'Increased redness to skin',
              value: 'increased_redness_to_skin',
            },
            {
              label: 'Small red spots, pimples, bumps, rash',
              value: 'small_red_spots_pimples_bumps_rash',
            },
            {
              label: 'Dandruff, flakiness, scaliness of skin',
              value: 'dandruff_flakiness_scaliness_of_skin',
            },
            {
              label: 'Increased odor of skin or coat',
              value: 'increased_odor_of_skin_or_coat',
            },
            {
              label: 'Crusty or scabby patches on skin',
              value: 'crusty_or_scabby_patches_on_skin',
            },
            {
              label: 'Open, raw sores',
              value: 'open_raw_sores',
            },
            {
              label: 'Areas that ooze blood or pus',
              value: 'areas_that_ooze_blood_or_pus',
            },
            {
              label: 'Eyes-redness, irritation, itching, discharge',
              value: 'eyes_redness_irritation_itching_discharge',
            },
            {
              label: 'Change in color or texture of hair',
              value: 'change_in_color_or_texture_of_hair',
            },
            {
              label: 'Darkening of areas of the skin',
              value: 'darkening_of_areas_of_the_skin',
            },
            {
              label: 'Loss of pigment of skin-black parts turn pink',
              value: 'loss_of_pigment_of_skin_black_parts_turn_pink',
            },
            {
              label: 'Ear infections',
              value: 'ear_infections',
            },
            {
              label: 'Fleas seen on pet',
              value: 'fleas_seen_on_pet',
            },
            {
              label: 'Diarrhea or loose stools',
              value: 'diarrhea_or_loose_stools',
            },
            {
              label: 'Vomiting',
              value: 'vomiting',
            },
            {
              label: 'Sneezing or wheezing',
              value: 'sneezing_or_wheezing',
            },
            {
              label: "Changes in pet's usual personality",
              value: 'changes_in_pets_usual_personality',
            },
            {
              label: "Changes in pet's usual activity level",
              value: 'changes_in_pets_usual_activity_level',
            },
            {
              label: 'Weight loss or weight gain',
              value: 'weight_loss_or_weight_gain',
            },
            {
              label: "Changes in pet's appetite",
              value: 'changes_in_pets_appetite',
            },
            {
              label: 'Changes in amount of water consumed',
              value: 'changes_in_amount_of_water_consumed',
            },
            {
              label: 'Changes in urinary habits',
              value: 'changes_in_urinary_habits',
            },
          ],
          validationRules: [
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
        },
        {
          type: 'picker',
          slug: 'body_area',
          label: 'Body Area',
          placeholder: 'Select',
          multi: true,
          options: [
            {
              label: 'Feet/paws',
              value: 'feet_paws',
            },
            {
              label: 'Legs/arms',
              value: 'legs_arms',
            },
            {
              label: 'Abdomen (belly)/genital area',
              value: 'abdomen_belly_genital_area',
            },
            {
              label: 'Armpits/chest/sides of body',
              value: 'armpits_chest_sides_of_body',
            },
            {
              label: 'Face/eyes',
              value: 'face_eyes',
            },
            {
              label: 'Ears/ear flaps',
              value: 'ears_ear_flaps',
            },
            {
              label: 'Along the back or rump',
              value: 'along_the_back_or_rump',
            },
            {
              label: 'The tail itself',
              value: 'the_tail_itself',
            },
            {
              label: 'Anal area',
              value: 'anal_area',
            },
          ],
          validationRules: [
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
        },
        {
          type: 'select',
          slug: 'itching',
          label: 'Itching',
          placeholder: 'Select',
          options: [
            {
              label: 'Not itchy',
              value: 'not_itchy',
            },
            {
              label: 'Mildly itchy',
              value: 'mildly_itchy',
            },
            {
              label: 'Moderately itchy',
              value: 'moderately_itchy',
            },
            {
              label: 'Severely itchy',
              value: 'severely_itchy',
            },
          ],
          validationRules: [
            {
              rule: 'object',
              args: [],
            },
          ],
        },
        {
          type: 'picker',
          slug: 'treatment_or_medication',
          label: 'Treatment or Medication',
          placeholder: 'Select',
          multi: true,
          options: [
            {
              label:
                'Cortisone pills or shots (steroids, Temaril, prednisone, Vetalog, anti-itch pills)',
              value:
                'cortisone_pills_or_shots_steroids_temaril_prednisone_vetalog_anti_itch_pills',
            },
            {
              label:
                'Antibiotics alone (with no other medication given at the same time)',
              value:
                'antibiotics_alone_with_no_other_medication_given_at_the_same_time',
            },
            {
              label: 'Antihistamine (Benadryl, Zyrtec, etc.)',
              value: 'antihistamine_benadryl_zyrtec_etc',
            },
            {
              label: 'Antifungal medication (Nizoral, etc.)',
              value: 'antifungal_medication_nizoral_etc',
            },
            {
              label: 'Cyclosporine (Atopica)',
              value: 'cyclosporine_atopica',
            },
            {
              label: 'Apoquel',
              value: 'apoquel',
            },
            {
              label: 'Allergy shots or drops',
              value: 'allergy_shots_or_drops',
            },
          ],
          validationRules: [
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
        },
        {
          type: 'select',
          slug: 'cause',
          label: 'Cause',
          placeholder: 'Select',
          options: [
            {
              label: 'Environmental Allergies',
              value: 'environmental_allergies',
            },
            {
              label: 'Food Allergies',
              value: 'food_allergies',
            },
            {
              label: 'Folliculitis',
              value: 'folliculitis',
            },
            {
              label: 'Impetigo',
              value: 'impetigo',
            },
            {
              label: 'Ringworm',
              value: 'ringworm',
            },
            {
              label: 'Mange',
              value: 'mange',
            },
            {
              label: 'Yeast Infections',
              value: 'yeast_infections',
            },
            {
              label: 'Ticks and Fleas',
              value: 'ticks_and_fleas',
            },
          ],
          validationRules: [
            {
              rule: 'object',
              args: [],
            },
          ],
        },
        {
          type: 'select',
          slug: 'improvement',
          label: 'Improvement',
          placeholder: 'Select',
          options: [
            {
              label: 'None',
              value: 'none',
            },
            {
              label: 'Mild',
              value: 'mild',
            },
            {
              label: 'Moderate',
              value: 'moderate',
            },
            {
              label: 'Good',
              value: 'good',
            },
            {
              label: 'Cured',
              value: 'cured',
            },
          ],
          validationRules: [
            {
              rule: 'object',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'notes',
          label: 'Notes',
          placeholder: 'Add notes..',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
        {
          type: 'file',
          slug: 'attachment',
          label: 'Attachment',
          extensions: ['pdf', 'doc', 'png', 'jpg'],
          validationRules: [
            {
              rule: 'array',
              args: [],
            },
            {
              rule: 'of',
              args: ['object'],
            },
          ],
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
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'table_food',
          label: 'Table Food',
          placeholder: 'Add notes..',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'treats',
          label: 'Treats',
          placeholder: 'Add notes..',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
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
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'string',
              args: [],
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
          validationRules: [
            {
              rule: 'required',
              args: [],
            },
            {
              rule: 'string',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'remarks',
          label: 'Remarks',
          placeholder: 'Add remarks..',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
      ],
      behavior: [
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
          slug: 'house_soiling',
          label: 'House Soiling',
          placeholder: 'Select',
          options: [
            {
              label: 'Frequently',
              value: 'frequently',
            },
            {
              label: 'Never',
              value: 'never',
            },
            {
              label: 'Sometimes',
              value: 'sometimes',
            },
            {
              label: "Don't know",
              value: 'dont_know',
            },
          ],
          validationRules: [
            {
              rule: 'object',
              args: [],
            },
          ],
        },
        {
          type: 'select',
          slug: 'excessive_barking',
          label: 'Excessive Barking',
          placeholder: 'Select',
          options: [
            {
              label: 'Frequently',
              value: 'frequently',
            },
            {
              label: 'Never',
              value: 'never',
            },
            {
              label: 'Sometimes',
              value: 'sometimes',
            },
            {
              label: "Don't know",
              value: 'dont_know',
            },
          ],
          validationRules: [
            {
              rule: 'object',
              args: [],
            },
          ],
        },
        {
          type: 'select',
          slug: 'consuming_non_food_objects',
          label: 'Consuming Non food objects',
          placeholder: 'Select',
          options: [
            {
              label: 'Frequently',
              value: 'frequently',
            },
            {
              label: 'Never',
              value: 'never',
            },
            {
              label: 'Sometimes',
              value: 'sometimes',
            },
            {
              label: "Don't know",
              value: 'dont_know',
            },
          ],
          validationRules: [
            {
              rule: 'object',
              args: [],
            },
          ],
        },
        {
          type: 'select',
          slug: 'reaction_to_strangers',
          label: 'Reaction to strangers',
          placeholder: 'Select',
          options: [
            {
              label: 'Happy',
              value: 'happy',
            },
            {
              label: 'Neutral',
              value: 'neutral',
            },
            {
              label: 'Fearful & Anxious',
              value: 'fearful_and_anxious',
            },
            {
              label: 'Barks & Growls',
              value: 'barks_and_growls',
            },
            {
              label: 'Snaps or bites',
              value: 'Snaps_or_bites',
            },
            {
              label: 'Attacks',
              value: 'attacks',
            },
          ],
          validationRules: [
            {
              rule: 'object',
              args: [],
            },
          ],
        },
        {
          type: 'select',
          slug: 'reaction_to_other_animals',
          label: 'Reaction to other animals',
          placeholder: 'Select',
          options: [
            {
              label: 'Happy',
              value: 'happy',
            },
            {
              label: 'Neutral',
              value: 'neutral',
            },
            {
              label: 'Fearful & Anxious',
              value: 'fearful_and_anxious',
            },
            {
              label: 'Barks & Growls',
              value: 'barks_and_growls',
            },
            {
              label: 'Snaps or bites',
              value: 'Snaps_or_bites',
            },
            {
              label: 'Attacks',
              value: 'attacks',
            },
          ],
          validationRules: [
            {
              rule: 'object',
              args: [],
            },
          ],
        },
        {
          type: 'select',
          slug: 'off_the_leash',
          label: 'Off the leash',
          placeholder: 'Select',
          options: [
            {
              label: 'Happy',
              value: 'happy',
            },
            {
              label: 'Neutral',
              value: 'neutral',
            },
            {
              label: 'Fearful & Anxious',
              value: 'fearful_and_anxious',
            },
            {
              label: 'Barks & Growls',
              value: 'barks_and_growls',
            },
            {
              label: 'Snaps or bites',
              value: 'Snaps_or_bites',
            },
            {
              label: 'Attacks',
              value: 'attacks',
            },
          ],
          validationRules: [
            {
              rule: 'object',
              args: [],
            },
          ],
        },
        {
          type: 'select',
          slug: 'veterinary_visits',
          label: 'Veterinary visits',
          placeholder: 'Select',
          options: [
            {
              label: 'Happy',
              value: 'happy',
            },
            {
              label: 'Neutral',
              value: 'neutral',
            },
            {
              label: 'Fearful & Anxious',
              value: 'fearful_and_anxious',
            },
            {
              label: 'Barks & Growls',
              value: 'barks_and_growls',
            },
            {
              label: 'Snaps or bites',
              value: 'Snaps_or_bites',
            },
            {
              label: 'Attacks',
              value: 'attacks',
            },
            {
              label: 'Confused',
              value: 'confused',
            },
          ],
          validationRules: [
            {
              rule: 'object',
              args: [],
            },
          ],
        },
        {
          type: 'select',
          slug: 'being_left_alone',
          label: 'Being left alone',
          placeholder: 'Select',
          options: [
            {
              label: 'Happy',
              value: 'happy',
            },
            {
              label: 'Neutral',
              value: 'neutral',
            },
            {
              label: 'Fearful & Anxious',
              value: 'fearful_and_anxious',
            },
            {
              label: 'Barks & Growls',
              value: 'barks_and_growls',
            },
            {
              label: 'Snaps or bites',
              value: 'Snaps_or_bites',
            },
            {
              label: 'Confused',
              value: 'confused',
            },
          ],
          validationRules: [
            {
              rule: 'object',
              args: [],
            },
          ],
        },
        {
          type: 'select',
          slug: 'in_vehicles',
          label: 'In vehicles',
          placeholder: 'Select',
          options: [
            {
              label: 'Happy',
              value: 'happy',
            },
            {
              label: 'Neutral',
              value: 'neutral',
            },
            {
              label: 'Fearful & Anxious',
              value: 'fearful_and_anxious',
            },
            {
              label: 'Barks & Growls',
              value: 'barks_and_growls',
            },
            {
              label: 'Snaps or bites',
              value: 'Snaps_or_bites',
            },
            {
              label: 'Confused',
              value: 'confused',
            },
          ],
          validationRules: [
            {
              rule: 'object',
              args: [],
            },
          ],
        },
        {
          type: 'select',
          slug: 'loud_noises',
          label: 'Loud Noises',
          placeholder: 'Select',
          options: [
            {
              label: 'Happy',
              value: 'happy',
            },
            {
              label: 'Neutral',
              value: 'neutral',
            },
            {
              label: 'Fearful & Anxious',
              value: 'fearful_and_anxious',
            },
            {
              label: 'Barks & Growls',
              value: 'barks_and_growls',
            },
            {
              label: 'Snaps or bites',
              value: 'Snaps_or_bites',
            },
            {
              label: 'Destructive',
              value: 'destructive',
            },
          ],
          validationRules: [
            {
              rule: 'object',
              args: [],
            },
          ],
        },
        {
          type: 'select',
          slug: 'bathing',
          label: 'Bathing',
          placeholder: 'Select',
          options: [
            {
              label: 'Cooperative',
              value: 'cooperative',
            },
            {
              label: 'Uncooperative',
              value: 'uncooperative',
            },
          ],
          validationRules: [
            {
              rule: 'object',
              args: [],
            },
          ],
        },
        {
          type: 'select',
          slug: 'on_a_leash_or_collar',
          label: 'On a leash or collar',
          placeholder: 'Select',
          options: [
            {
              label: 'Happy',
              value: 'happy',
            },
            {
              label: 'Neutral',
              value: 'neutral',
            },
            {
              label: 'Fearful & Anxious',
              value: 'fearful_and_anxious',
            },
            {
              label: 'Barks & Growls',
              value: 'barks_and_growls',
            },
            {
              label: 'Snaps or bites',
              value: 'Snaps_or_bites',
            },
            {
              label: 'Confused',
              value: 'confused',
            },
          ],
          validationRules: [
            {
              rule: 'object',
              args: [],
            },
          ],
        },
      ],
      steroid: [
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
          placeholder: 'Steroid name',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
        {
          type: 'select',
          slug: 'type',
          label: 'Type',
          placeholder: 'Select',
          options: [
            {
              label: 'Capsules',
              value: 'capsules',
            },
            {
              label: 'Chewables',
              value: 'chewables',
            },
            {
              label: 'liquids',
              value: 'liquids',
            },
            {
              label: 'Tablets',
              value: 'tablets',
            },
            {
              label: 'Transdermals',
              value: 'transdermals',
            },
          ],
          validationRules: [
            {
              rule: 'object',
              args: [],
            },
          ],
        },
        [
          {
            type: 'text',
            slug: 'dosage',
            label: 'Dosage',
            placeholder: 'Dosage',
            validationRules: [
              {
                rule: 'string',
                args: [],
              },
            ],
          },
          {
            type: 'select',
            slug: 'unit',
            label: 'Unit',
            placeholder: 'Select',
            options: [
              {
                label: 'Caplet',
                value: 'caplet',
              },
              {
                label: 'Caplet per 20 Pounds',
                value: 'caplet_per_20_pounds',
              },
              {
                label: 'Milligram',
                value: 'milligram',
              },
              {
                label: 'Milligram per Pound',
                value: 'milligram_per_pound',
              },
              {
                label: 'Milligram per 20 Pounds',
                value: 'milligram_per_20_pounds',
              },
              {
                label: 'Millilitre',
                value: 'millilitre',
              },
              {
                label: 'Millilitre per Pound',
                value: 'millilitre_per_pound',
              },
              {
                label: 'Teaspoon',
                value: 'teaspoon',
              },
              {
                label: 'Teaspoon per 5 Pounds',
                value: 'teaspoon_per_5_pounds',
              },
              {
                label: 'Teaspoon per 20 Pounds',
                value: 'teaspoon_per_20_pounds',
              },
              {
                label: 'Tbs',
                value: 'tbs',
              },
            ],
            validationRules: [
              {
                rule: 'object',
                args: [],
              },
            ],
          },
        ],
        {
          type: 'select',
          slug: 'frequency',
          label: 'Frequency',
          placeholder: 'Select',
          options: [
            {
              label: 'Once a Day',
              value: 'once_a_day',
            },
            {
              label: 'Twice a Day',
              value: 'twice_a_day',
            },
            {
              label: 'Four Times a Day',
              value: 'four_times_a_day',
            },
            {
              label: 'Once or Twice a Day',
              value: 'once_or_twice_a_day',
            },
            {
              label: '2 to 3 Times a Day',
              value: '2_to_3_times_a_day',
            },
            {
              label: '3 to 4 Times a Day',
              value: '3_to_4_times_a_day',
            },
            {
              label: '4 to 6 Times a Day',
              value: '4_to_6_times_a_day',
            },
            {
              label: 'More than 6 Times a Day',
              value: 'more_than_6_times_a_day',
            },
          ],
          validationRules: [
            {
              rule: 'object',
              args: [],
            },
          ],
        },
        {
          type: 'text',
          slug: 'no_of_times_treated_past_year',
          label: 'No of times treated past year',
          placeholder: 'No of times treated past year',
          validationRules: [
            {
              rule: 'string',
              args: [],
            },
          ],
        },
        {
          type: 'select',
          slug: 'response_to_steroids',
          label: 'Response to steroids',
          placeholder: 'Select',
          options: [
            {
              label: 'Excellent Response',
              value: 'excellent_response',
            },
            {
              label: 'No Response',
              value: 'no_response',
            },
            {
              label: 'Temporary Response',
              value: 'temporary_response',
            },
          ],
          validationRules: [
            {
              rule: 'object',
              args: [],
            },
          ],
        },
      ],
    },
    schema: {
      date: Date,
      time: String,
      condition: [{ label: String, value: String }],
      notes: String,
      procedure_names: { label: String, value: String },
      no_of_cycles: Number,
      pregnancy_type: { label: String, value: String },
      previous_litters_status: { label: String, value: String },
      pseudo_pregnancy: String,
      staple: String,
      table_food: String,
      treats: String,
      grooming: String,
      breeder: String,
      name: String,
      remarks: String,
      dosage: String,
      no_of_times_treated_past_year: String,
      response_to_steroids: { label: String, value: String },
      unit: { label: String, value: String },
      frequency: { label: String, value: String },
      house_soiling: { label: String, value: String },
      excessive_barking: { label: String, value: String },
      consuming_non_food_objects: { label: String, value: String },
      reaction_to_strangers: { label: String, value: String },
      reaction_to_other_animals: { label: String, value: String },
      off_the_leash: { label: String, value: String },
      veterinary_visits: { label: String, value: String },
      being_left_alone: { label: String, value: String },
      in_vehicles: { label: String, value: String },
      loud_noises: { label: String, value: String },
      type: { label: String, value: String },
      form_type: String,
      bathing: { label: String, value: String },
      clinical_sign: [{ label: String, value: String }],
      body_area: [{ label: String, value: String }],
      itching: { label: String, value: String },
      treatment_or_medication: [{ label: String, value: String }],
      cause: { label: String, value: String },
      improvement: { label: String, value: String },
      on_a_leash_or_collar: { label: String, value: String },
      ...defaultSchema,
    },
  },
  appointment: {
    name: 'Appointment',
    slug: 'appointment',
    has_list: false,
    value: [
      {
        type: 'picker',
        slug: 'provider_id',
        label: 'Choose Doctor',
        placeholder: 'Select',
        option_source: 'url',
        option_url: `${process.env.TELEVET_API_URL}/providers`,
        multi: false,
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
        validationRules: [
          {
            rule: 'required',
            args: [],
          },
          {
            rule: 'string',
            args: [],
          },
        ],
      },
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
        slug: 'reason',
        label: 'Reason for Consult',
        placeholder: 'Describe',
        validationRules: [
          {
            rule: 'string',
            args: [],
          },
        ],
      },
    ],
  },
};
