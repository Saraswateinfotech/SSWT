// components/forms/profile/PortfolioSection.js
import FormSection from './FormSection';
import FormInput from '../ui/FormInput';
import FileUploadField from './FileUploadField';

export default function PortfolioSection({ formData, handleChange, handleFileChange }) {
  return (
    <FormSection title="Portfolio & Experience" color="rose">
      <div>
        <FormInput
          type="url"
          name="linkedinProfile"
          placeholder="LinkedIn Profile URL"
          value={formData.linkedinProfile}
          onChange={handleChange}
          colorFocus="focus:ring-rose-500 focus:border-rose-500"
        />
      </div>

      <div>
        <FormInput
          type="url"
          name="portfolioWebsite"
          placeholder="Portfolio Website URL"
          value={formData.portfolioWebsite}
          onChange={handleChange}
          colorFocus="focus:ring-rose-500 focus:border-rose-500"
        />
      </div>

      <div>
        <FormInput
          type="url"
          name="githubProfile"
          placeholder="GitHub Profile URL"
          value={formData.githubProfile}
          onChange={handleChange}
          colorFocus="focus:ring-rose-500 focus:border-rose-500"
        />
      </div>

      <div>
        <FileUploadField onFileChange={handleFileChange} />
      </div>

      <div>
        <FormInput
          name="currentEmployer"
          placeholder="Current Employer"
          value={formData.currentEmployer}
          onChange={handleChange}
          colorFocus="focus:ring-rose-500 focus:border-rose-500"
        />
      </div>

      <div>
        <FormInput
          name="currentRole"
          placeholder="Current Role"
          value={formData.currentRole}
          onChange={handleChange}
          colorFocus="focus:ring-rose-500 focus:border-rose-500"
        />
      </div>

      <div>
        <FormInput
          type="number"
          name="totalYearsOfExperience"
          min="0"
          placeholder="Total Years of Experience"
          value={formData.totalYearsOfExperience}
          onChange={handleChange}
          colorFocus="focus:ring-rose-500 focus:border-rose-500"
        />
      </div>
    </FormSection>
  );
}