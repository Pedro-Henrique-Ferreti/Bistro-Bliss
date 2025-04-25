<template>
  <section>
    <h2 class="h2 text-center">
      What Our Customers Say
    </h2>
    <div class="grid gap-1.5 mt-4 tablet-landscape:grid-cols-3">
      <div
        v-for="(review, index) in CustomerReviews"
        class="bg-neutral-1 rounded-xl p-2 pt-[2.75rem]"
        :key="index"
      >
        <h3 class="h3 mb-1.5 text-primary">
          “{{ review.title }}”
        </h3>
        <p class="text-dark-400">
          {{ review.reviewText }}
        </p>
        <div class="flex items-center gap-[1.25rem] mt-2 pt-2 border-t border-neutral-2">
          <img
            class="w-[4.375rem] h-[4.375rem] rounded-full"
            :src="review.customer.profilePicture"
            :alt="review.customer.name"
          >
          <div class="flex flex-col gap-[0.1875rem]">
            <span class="font-bold">
              {{ review.customer.name }}
            </span>
            <span class="text-dark-400">
              ({{ review.customer.city }}, {{ review.customer.state }})
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
interface CustomerReview {
  title: string;
  reviewText: string;
  customer: {
    name: string;
    city: string;
    state: string;
    profilePicture: string;
  };
}
</script>

<script setup lang="ts">
const CustomerReviews: CustomerReview[] = [
  {
    title: 'The best restaurant',
    reviewText: 'Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.',
    customer: {
      name: 'Sophire Robson',
      city: 'Los Angeles',
      state: 'CA',
      profilePicture: 'https://i.pravatar.cc/70?img=32',
    },
  },
  {
    title: 'Simply delicious',
    reviewText: 'Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.',
    customer: {
      name: 'Matt Cannon',
      city: 'San Diego',
      state: 'CA',
      profilePicture: 'https://i.pravatar.cc/70?img=13',
    },
  },
  {
    title: 'One of a kind restaurant',
    reviewText: 'The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.',
    customer: {
      name: 'Andy Smith',
      city: 'San Francisco',
      state: 'CA',
      profilePicture: 'https://i.pravatar.cc/70?img=5',
    },
  },
];
</script>
