import { useState } from 'react';

interface FormData {
  nom: string;
  email: string;
  typePierre: string;
  budget: string;
  usage: string;
  delai: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    email: '',
    typePierre: '',
    budget: '',
    usage: '',
    delai: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const form = e.target as HTMLFormElement;
      const formDataEncoded = new FormData(form);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formDataEncoded.entries())),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          nom: '',
          email: '',
          typePierre: '',
          budget: '',
          usage: '',
          delai: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="p-10 bg-green-50 rounded-3xl border border-green-100 text-center">
        <div className="w-16 h-16 mx-auto bg-green-100 rounded-2xl flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-6 text-xl font-medium text-green-900 font-serif">Demande envoyée</h3>
        <p className="mt-3 text-green-700">
          Merci pour votre message. Je vous répondrai sous 48h.
        </p>
      </div>
    );
  }

  const inputClasses = "w-full px-5 py-4 bg-white border border-warm-200 rounded-xl text-warm-900 placeholder-warm-400 focus:outline-none focus:border-copper-400 focus:ring-2 focus:ring-copper-100 transition-all duration-300";
  const labelClasses = "block text-sm font-medium text-warm-700 mb-2";

  return (
    <form
      name="contact"
      method="POST"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nom" className={labelClasses}>
            Nom complet *
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            value={formData.nom}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="typePierre" className={labelClasses}>
          Type de pierre recherchée *
        </label>
        <input
          type="text"
          id="typePierre"
          name="typePierre"
          required
          placeholder="Ex: Saphir bleu, Émeraude, Rubis..."
          value={formData.typePierre}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="budget" className={labelClasses}>
            Budget estimé *
          </label>
          <select
            id="budget"
            name="budget"
            required
            value={formData.budget}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Sélectionner</option>
            <option value="5000-15000">5 000 € - 15 000 €</option>
            <option value="15000-25000">15 000 € - 25 000 €</option>
            <option value="25000-50000">25 000 € - 50 000 €</option>
            <option value="50000-100000">50 000 € - 100 000 €</option>
            <option value="100000+">Plus de 100 000 €</option>
            <option value="a-definir">Budget à définir</option>
          </select>
        </div>

        <div>
          <label htmlFor="usage" className={labelClasses}>
            Usage prévu
          </label>
          <select
            id="usage"
            name="usage"
            value={formData.usage}
            onChange={handleChange}
            className={inputClasses}
          >
            <option value="">Sélectionner</option>
            <option value="bijou">Bijou (bague, pendentif...)</option>
            <option value="collection">Collection</option>
            <option value="cadeau">Cadeau</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="delai" className={labelClasses}>
          Délai souhaité
        </label>
        <select
          id="delai"
          name="delai"
          value={formData.delai}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Sélectionner</option>
          <option value="1-3mois">1 à 3 mois</option>
          <option value="3-6mois">3 à 6 mois</option>
          <option value="6mois+">Plus de 6 mois / Pas de délai précis</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Décrivez votre projet *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre projet, vos attentes, et toute information utile..."
          value={formData.message}
          onChange={handleChange}
          className={inputClasses}
        />
      </div>

      <div className="text-sm text-warm-500 p-4 bg-warm-50 rounded-xl">
        <p>
          En soumettant ce formulaire, vous acceptez que vos données soient utilisées uniquement pour répondre à votre demande.
          Aucune donnée n'est stockée ou partagée à des tiers.
        </p>
      </div>

      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-100 text-red-700 text-sm rounded-xl">
          Une erreur s'est produite. Veuillez réessayer ou me contacter directement par email.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="group w-full px-8 py-4 bg-gradient-to-r from-copper-500 to-copper-600 text-cream font-medium rounded-full hover:from-copper-600 hover:to-copper-700 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5"
      >
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Envoi en cours...
          </>
        ) : (
          <>
            Soumettre mon projet
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
