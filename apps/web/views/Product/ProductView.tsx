/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/J1swfBP3ZeH
 */
import { Button } from "components/ui/Button"
import { Label } from "components/ui/Label"
import { RadioGroup, RadioGroupItem } from "components/ui/RadioGroup"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "components/ui/Select"
import { notFound } from "next/navigation"
import { storefrontClient } from "utils/storefrontClient"

export async function ProductView({ slug }) {
  const queriedProducts = await storefrontClient.getProductsByHandle(slug)

  if (queriedProducts.data?.products.edges.length === 0) {
    return notFound()
  }

  const product = queriedProducts.data?.products.edges[0].node

  return (
    <div className="mx-auto grid max-w-6xl items-start gap-6 px-4 py-6 md:grid-cols-2 lg:gap-12">
      <div className="grid items-start gap-3 md:grid-cols-5">
        <div className="flex items-start md:hidden">
          <div className="grid gap-4">
            <h1 className="text-2xl font-bold sm:text-3xl">{product?.title}</h1>
            <div>
              <p>{product?.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                <StarIcon className="fill-primary h-5 w-5" />
                <StarIcon className="fill-primary h-5 w-5" />
                <StarIcon className="fill-primary h-5 w-5" />
                <StarIcon className="fill-muted stroke-muted-foreground h-5 w-5" />
                <StarIcon className="fill-muted stroke-muted-foreground h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="ml-auto text-4xl font-bold">$99</div>
        </div>
        <div className="hidden flex-col items-start gap-3 md:flex">
          {product?.images.edges.map((image, index) => (
            <button
              key={image.node.url}
              className="overflow-hidden rounded-lg border transition-colors hover:border-gray-900 dark:hover:border-gray-50"
            >
              <img
                alt={image.node.altText || ""}
                className="aspect-[5/6] object-cover"
                height={120}
                src={image.node.url}
                width={100}
              />
              <span className="sr-only">View Image {index + 1}</span>
            </button>
          ))}
        </div>
        <div className="md:col-span-4">
          <img
            alt={product?.featuredImage?.altText || ""}
            className="aspect-[2/3] w-full overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-gray-800"
            height={900}
            src={product?.featuredImage?.url}
            width={600}
          />
        </div>
      </div>
      <div className="grid items-start gap-4 md:gap-10">
        <div className="hidden items-start md:flex">
          <div className="grid gap-4">
            <h1 className="text-3xl font-bold lg:text-4xl">{product?.title}</h1>
            <div>
              <p>{product?.description}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                <StarIcon className="fill-primary h-5 w-5" />
                <StarIcon className="fill-primary h-5 w-5" />
                <StarIcon className="fill-primary h-5 w-5" />
                <StarIcon className="fill-muted stroke-muted-foreground h-5 w-5" />
                <StarIcon className="fill-muted stroke-muted-foreground h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="ml-auto text-4xl font-bold">{product?.variants?.edges?.[0]?.node?.price.amount}</div>
        </div>
        <form className="grid gap-4 md:gap-10">
          <div className="grid gap-2">
            <Label className="text-base" htmlFor="color">
              Color
            </Label>
            <RadioGroup className="flex items-center gap-2" defaultValue="black" id="color">
              <Label
                className="flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                htmlFor="color-black"
              >
                <RadioGroupItem id="color-black" value="black" />
                Black
              </Label>
              <Label
                className="flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                htmlFor="color-white"
              >
                <RadioGroupItem id="color-white" value="white" />
                White
              </Label>
              <Label
                className="flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                htmlFor="color-blue"
              >
                <RadioGroupItem id="color-blue" value="blue" />
                Blue
              </Label>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label className="text-base" htmlFor="size">
              Size
            </Label>
            <RadioGroup className="flex items-center gap-2" defaultValue="m" id="size">
              <Label
                className="flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                htmlFor="size-xs"
              >
                <RadioGroupItem id="size-xs" value="xs" />
                XS
              </Label>
              <Label
                className="flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                htmlFor="size-s"
              >
                <RadioGroupItem id="size-s" value="s" />S{"\n                          "}
              </Label>
              <Label
                className="flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                htmlFor="size-m"
              >
                <RadioGroupItem id="size-m" value="m" />M{"\n                          "}
              </Label>
              <Label
                className="flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                htmlFor="size-l"
              >
                <RadioGroupItem id="size-l" value="l" />L{"\n                          "}
              </Label>
              <Label
                className="flex cursor-pointer items-center gap-2 rounded-md border p-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                htmlFor="size-xl"
              >
                <RadioGroupItem id="size-xl" value="xl" />
                XL
              </Label>
            </RadioGroup>
          </div>
          <div className="grid gap-2">
            <Label className="text-base" htmlFor="quantity">
              Quantity
            </Label>
            <Select defaultValue="1">
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button size="lg">Add to cart</Button>
        </form>
      </div>
    </div>
  )
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}