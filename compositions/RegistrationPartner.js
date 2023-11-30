import { WidgetPartners, Translatable } from 'eventjuicer-site-components';

const RegistrationPartner = () => {
  return (
    <>
      <WidgetPartners
        label="partners.registration.title"
        filter={(item) =>
          item['scopes(deprecated)'].indexOf('registration') > -1 &&
          item.logotype.indexOf('cloudinary') > -1
        }
        limit={1}
        center={true}
      />
      
    </>
  );
};

export default RegistrationPartner;
