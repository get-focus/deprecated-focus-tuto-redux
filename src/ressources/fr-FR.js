import i18next from 'i18next'
import resourcesComponent from 'focus-components/translation/resources/fr-FR';
import {intializeTranslation} from 'focus-application/translation'

intializeTranslation(i18next, 'fr-FR', [resourcesComponent, {
      user: {
        firstName: 'yo',
      }
}])
