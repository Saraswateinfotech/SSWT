// components/forms/profile/ProfessionalInterestsSection.js
import FormSection from './FormSection';
import FormInput from '../ui/FormInput';
import FormTextarea from '../ui/FormTextarea';

export default function ProfessionalInterestsSection({ formData, handleChange }) {
  return (
    <FormSection title="Professional Interests" color="amber">
      <div>
        <FormInput
          name="areaOfInterest"
          placeholder="Area of Interest (e.g., Data Science, Web Development)"
          value={formData.areaOfInterest}
          onChange={handleChange}
          required
          colorFocus="focus:ring-amber-500 focus:border-amber-500"
        />
      </div>

      <div>
        <FormInput
          name="preferredRoles"
          placeholder="Preferred Roles (e.g., Frontend Developer, UX Designer)"
          value={formData.preferredRoles}
          onChange={handleChange}
          required
          colorFocus="focus:ring-amber-500 focus:border-amber-500"
        />
      </div>

      <div>
        <FormInput
          type="number"
          name="yearsOfExperience"
          min="0"
          placeholder="Years of Experience in Your Skill"
          value={formData.yearsOfExperience}
          onChange={handleChange}
          required
          colorFocus="focus:ring-amber-500 focus:border-amber-500"
        />
      </div>

      <div>
        <FormInput
          name="availability"
          placeholder="Availability (e.g., Full-time, 3 days/week)"
          value={formData.availability}
          onChange={handleChange}
          required
          colorFocus="focus:ring-amber-500 focus:border-amber-500"
        />
      </div>

      <div className="sm:col-span-2">
        <FormTextarea
          name="shortBio"
          rows="4"
          placeholder="Professional Bio - Tell us about yourself, your expertise, and your professional journey"
          value={formData.shortBio}
          onChange={handleChange}
          required
          colorFocus="focus:ring-amber-500 focus:border-amber-500"
        />
      </div>
    </FormSection>
  );
}