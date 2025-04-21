// components/forms/profile/LocationSection.js
import FormSection from './FormSection';
import FormInput from '../ui/FormInput';

export default function LocationSection({ formData, handleChange }) {
  return (
    <FormSection title="Location" color="purple">
      <div className="sm:col-span-6">
        <FormInput
          name="addressLine1"
          placeholder="Address Line 1"
          value={formData.addressLine1}
          onChange={handleChange}
          colorFocus="focus:ring-purple-500 focus:border-purple-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:col-span-6">
        <div>
          <FormInput
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            colorFocus="focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <div>
          <FormInput
            name="state"
            placeholder="State / Province"
            value={formData.state}
            onChange={handleChange}
            colorFocus="focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:col-span-6">
        <div>
          <FormInput
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            colorFocus="focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <div>
          <FormInput
            name="pincode"
            placeholder="Pincode / ZIP"
            value={formData.pincode}
            onChange={handleChange}
            colorFocus="focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>
    </FormSection>
  );
}