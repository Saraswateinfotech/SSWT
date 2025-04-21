// components/forms/profile/PersonalInfoSection.js
import FormSection from './FormSection';
import FormInput from '../ui/FormInput';

export default function PersonalInfoSection({ formData, handleChange }) {
  return (
    <FormSection title="Personal Information" color="emerald">
      <div>
        <FormInput
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          colorFocus="focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>

      <div>
        <FormInput
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          colorFocus="focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>

      <div className="sm:col-span-2">
        <FormInput
          type="email"
          name="emailAddress"
          placeholder="Email Address"
          value={formData.emailAddress}
          onChange={handleChange}
          required
          colorFocus="focus:ring-emerald-500 focus:border-emerald-500"
        />
      </div>
    </FormSection>
  );
}