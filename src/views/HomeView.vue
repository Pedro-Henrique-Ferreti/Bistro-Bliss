<template>
  <main>
    <section
      class="
      flex justify-center items-center flex-col h-[35rem] p-(--spacing-screen-padding) text-center
      bg-[url('/images/hero-background.webp')] bg-cover bg-center desktop:h-[calc(100vh-9.25rem)]
    "
    >
      <h1 class="h1">
        Best food for <br> your taste
      </h1>
      <p class="text-xl mt-2 max-w-[33.5rem]">
        Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.
      </p>
      <div class="flex flex-wrap justify-center gap-1 mt-[2.5rem]">
        <AppButton :to="{ name: 'book-table' }">
          Book A Table
        </AppButton>
        <AppButton
          variant="outline"
          label="Explore Menu"
          :to="{ name: 'menu' }"
        />
      </div>
    </section>
    <section class="page-section">
      <h2 class="h2 text-center">
        Browse Our Menu
      </h2>
      <div class="grid gap-1.5 mt-3 desktop:mt-4 tablet:grid-cols-2 desktop:grid-cols-4">
        <HomeMenuCard
          title="Breakfast"
          description="Start your day with a hearty breakfast that will satisfy your cravings."
          :icon="IconTea"
        />
        <HomeMenuCard
          title="Main Dishes"
          description="Delicious main dishes to satisfy your cravings and keep you full."
          :icon="IconRiceBowl"
        />
        <HomeMenuCard
          title="Drinks"
          description="Refreshing drinks to keep you hydrated and energized throughout the day."
          :icon="IconDrink"
        />
        <HomeMenuCard
          title="Desserts"
          description="Sweet and satisfying desserts to satisfy your sweet tooth and keep you satisfied."
          :icon="IconCakeSlice"
        />
      </div>
    </section>
    <section class="bg-neutral-1">
      <AboutDescription
        class="page-section"
        image="/images/home-about.webp"
      >
        <AppButton
          variant="outline"
          label="More About Us"
          :to="{ name: 'about' }"
        />
      </AboutDescription>
    </section>
    <section class="page-section">
      <h2 class="h2">
        We also offer unique <br class="max-[400px]:hidden"> services for your events
      </h2>
      <div class="flex flex-wrap justify-center gap-y-2 gap-x-1.5 mt-4 desktop:grid desktop:grid-cols-4">
        <HomeServicesCard
          title="Caterings"
          description="Customizable menus and professional service to bring the Bistro Bliss experience to your gathering—big or small."
          image="/images/services-catering.webp"
        />
        <HomeServicesCard
          title="Birthdays"
          description="Celebrate your special day with delicious food, festive vibes, and thoughtful touches tailored just for you."
          image="/images/services-birthday.webp"
        />
        <HomeServicesCard
          title="Weddings"
          description="Elegant dining and seamless service to make your big day truly unforgettable—for you and your guests."
          image="/images/services-wedding.webp"
        />
        <HomeServicesCard
          title="Events"
          description="From corporate meetings to private parties, we provide the perfect setting and flavors to match any occasion."
          image="/images/services-events.webp"
        />
      </div>
    </section>
    <section class="bg-neutral-1">
      <div class="page-section flex flex-col-reverse items-center gap-3 desktop:flex-row desktop:gap-6">
        <img
          class="w-full max-desktop:max-w-[30rem]"
          src="/images/delivery.webp"
          alt="City delivery"
          loading="lazy"
        >
        <div>
          <h2 class="h2 mb-[1.25rem]">
            Fastest Food Delivery in City
          </h2>
          <p class="text-dark-400">
            Get your favorite meals delivered hot and fresh—faster than anyone else in the city.
          </p>
          <ul class="grid gap-[1.25rem] mt-3 text-[1.25rem] font-bold">
            <li class="flex gap-[1.25rem]">
              <div class="grid place-items-center text-white w-[1.75rem] h-[1.75rem] rounded-full bg-primary">
                <IconClock class="w-auto h-1" />
              </div>
              Delivery within 30 minutes
            </li>
            <li class="flex gap-[1.25rem]">
              <div class="grid place-items-center text-white w-[1.75rem] h-[1.75rem] rounded-full bg-primary">
                <IconReceiptTax class="w-auto h-1" />
              </div>
              Best Offer & Prices
            </li>
            <li class="flex gap-[1.25rem]">
              <div class="grid place-items-center text-white w-[1.75rem] h-[1.75rem] rounded-full bg-primary">
                <IconShoppingCart class="w-auto h-1" />
              </div>
              Online Services Available
            </li>
          </ul>
        </div>
      </div>
    </section>
    <CustomerReview class="page-section" />
    <section class="bg-neutral-1">
      <div class="page-section">
        <header class="flex flex-wrap gap-2 items-center justify-between mb-4">
          <h2 class="h2">
            Our Blog & Articles
          </h2>
          <AppButton :to="{ name: 'blog' }">
            Read All Articles
          </AppButton>
        </header>
        <div
          class="
          grid gap-1.5 grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] desktop:grid-cols-4 desktop-grid-rows-2
        "
        >
          <ArticlePreview
            v-for="(article, index) in HOME_ARTICLES"
            :key="article.id"
            class="desktop:first:col-span-2 desktop:first:row-span-2"
            :article="article"
            :show-description="index === 0"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ARTICLE_LIST } from '@/constants/articles';
import IconTea from '@/assets/icons/Tea.svg';
import IconCakeSlice from '@/assets/icons/CakeSlice.svg';
import IconDrink from '@/assets/icons/Drink.svg';
import IconRiceBowl from '@/assets/icons/RiceBowl.svg';
import IconClock from '@/assets/icons/Clock.svg';
import IconReceiptTax from '@/assets/icons/ReceiptTax.svg';
import IconShoppingCart from '@/assets/icons/ShoppingCart.svg';
import AppButton from '@/components/AppButton.vue';
import HomeMenuCard from '@/components/HomeMenuCard.vue';
import AboutDescription from '@/components/AboutDescription.vue';
import HomeServicesCard from '@/components/HomeServicesCard.vue';
import CustomerReview from '@/components/CustomerReview.vue';
import ArticlePreview from '@/components/ArticlePreview.vue';

const HOME_ARTICLES = [
  ARTICLE_LIST[0],
  ARTICLE_LIST[1],
  ARTICLE_LIST[2],
  ARTICLE_LIST[3],
  ARTICLE_LIST[4],
] as const;
</script>
